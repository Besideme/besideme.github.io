/* 
from: http://blog.ixxoo.me/media/js/douban.api.js
requirements: jquery.min.js
user2: user: "80732717", api: "0b054b3d925d4f1d210fe1b8b717ed57"
*/

function DoubanApi() {
	this.defaults = {
		place:"douban", /*至于此 id 为 place 的标签中*/
		// user:"kingtouch",
		// api:"0b204112100ace0a2160c33630206a1e",
		user: "133568394",
		api: "0d6ccfaf50b5870228466f0df2209506",
		book:[{status:"reading",maxnum:20},{status:"read",maxnum:100},{status:"wish",maxnum:100}],
		bookreadingtitle:"在读 · · ·",
		bookreadtitle:"读过 · · ·",
		bookwishtitle:"想读 · · ·"
	};
}

DoubanApi.prototype.make_api_url = function(type,user,key,status,begin,end) {
	var url = "//api.douban.com/people/" + user + "/collection?cat=" + type 
		+ "&start-index=" + begin + "&max-results=" + end + "&status=" + status 
		+ "&alt=xd&callback=dbapi." + type + status + "_show";
	if (key.lenght > 0) {
		url += "&apikey=" + key;
	}
	return url;
}

DoubanApi.prototype.make_list_item = function(items) {
	var html = '';
	$.each(items,function(i,item){
		html += '<li><a href="'
			+ item.link + '" target="_blank"><img src="'
			+ item.src + '" alt="' + item.title
			+ '" title="' + item.title + '" /></a></li>';
	});
	return html;
};

DoubanApi.prototype.parse_json = function(json) {
	var items = [];
	$.each(json.entry,function(i,item) {
		var link = {};
		link.title = item["db:subject"]["title"]["$t"];
		link.link = item["db:subject"]["link"][1]["@href"];	//硬编码
		link.src = item["db:subject"]["link"][2]["@href"];	//硬编码
		items.push(link);
	});
	return items;
};

DoubanApi.prototype.fix_num = function(num) {
	var index = 1;
	var fixnums = [];
	if (50 > num && num  > 0) {
		fixnums.push({begin:index,end:num});
	}
	else {
		while (num > 0) {
			fixnums.push({begin:index,end:index + 49});
			num -= 50;
			index += 50;
		}
	}
	return fixnums;
};

DoubanApi.prototype.show = function() {
	var books = [];
	var tmpthis = this;
	$.each(this.defaults.book,function(i,item) {
		var fixnums = tmpthis.fix_num(item.maxnum);
		books.push({status:item.status,indexs:fixnums});
	});

	$.each(books,function(i,item) {
		$.each(item.indexs,function(t,idx) {
			tmpthis.appendScript(tmpthis.all_url("book",item.status,idx.begin,idx.end));
		});
	});
};

DoubanApi.prototype.appendScript = function(url) {
	if (url && url.length > 0) {
		$("<script/>").attr("src",url).attr("charset","utf-8").appendTo($("head")[0]);
	}
};

DoubanApi.prototype.all_url = function(type,status,begin,end) {
	if (end === 0 ) return;
	if (!this[type + status + "_show"]) {
		this[type + status + "_show"] = function(json) {
			var mainplace = $("#" + this.defaults.place);
			if (mainplace.length === 0) {
				mainplace = $('<div id="' + this.defaults.place + '"></div>').prependTo($("body"));
			}
			if ($("#" + type + status).length === 0) {
				var title = this.defaults[type + status + "title"];
				$('<h2 class="douban-title">' + title + '</h2>').appendTo(mainplace);
				$('<div id="' + type + status + '" class="douban-list clearfix"><ul></ul></div>').appendTo(mainplace);
			}
			$("#" + type + status + " > ul").append(this.make_list_item(this.parse_json(json)));
		};
	}
	return this.make_api_url(type,this.defaults.user,this.defaults.api,status,begin,end);
};
