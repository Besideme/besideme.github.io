---
layout: post
title:  Python sort() 
date:   2015-09-14 08:22:50
categories: note
---

`list.sort()` modifies the list in-place, the list.sort() method is only defined for lists.   
`sorted()` build a new sorted list from an iterable, the sorted() function accepts any iterable. 

### Sorting Basics

`list.sort()` and `sorted()` 按照 `lexicographically` **字典序** 进行，参照  
[http://besideme.github.io/jekyll/update/2015/09/12/Python-data-structure.html](http://besideme.github.io/jekyll/update/2015/09/12/Python-data-structure.html "查看比较序列")

{% highlight python %}
sorted("this is A test".split())
['A','is','test','this']
# 如果不加 split() 函数，则输出为 [' ',' ',' ','A','e','h','i','i',...]
sorted(set(['a','eee','bfrr']))
['a','bfrr','eee']
{% endhighlight %}

### Key Functions

{% highlight python %}
>>> student_tuples = [
    ('john', 'A', 15),
    ('jane', 'B', 12),
    ('dave', 'B', 10),
]
>>> sorted(student_tuples, key = lambda stu: stu[2])   # sort by age
[('dave', 'B', 10), ('jane', 'B', 12), ('john', 'A', 15)]
{% endhighlight %}

{% highlight python %}
class Student:
        def __init__(self, name, grade, age):
            self.name = name
            self.grade = grade
            self.age = age
        def __repr__(self):
            return repr((self.name, self.grade, self.age))
>>> student_objects = [
    Student('john', 'A', 15),
    Student('jane', 'B', 12),
    Student('dave', 'B', 10),
]
>>> sorted(student_objects, key = lambda stu: stu.age)   # sort by age
[('dave', 'B', 10), ('jane', 'B', 12), ('john', 'A', 15)]
{% endhighlight %}

### Operator Module Functions

`operator.itemgetter()`, `operator.attrgetter()` can be easier
{% highlight python %}
>>>from operator import itemgetter, attrgetter,methodcaller
>>> sorted(student_tuples, key = itemgetter(2))
[('dave', 'B', 10), ('jane', 'B', 12), ('john', 'A', 15)]
>>> sorted(student_objects, key = attrgetter('age'))
[('dave', 'B', 10), ('jane', 'B', 12), ('john', 'A', 15)]
{% endhighlight %}

The operator module functions allow multiple levels of sorting.   
For example, to sort by grade then by age  
That means if grades are the same then compare age  
{% highlight python %}
>>> sorted(student_tuples, key = itemgetter(1,2))
[('john', 'A', 15), ('dave', 'B', 10), ('jane', 'B', 12)]
>>> sorted(student_objects, key = attrgetter('grade', 'age'))
{% endhighlight %}

The `operator.methodcaller()` function makes method calls with fixed parameters for each object being sorted.   
For example, the `str.count()` method could be used to compute message priority by counting the number of exclamation marks in a message
{% highlight python %}
>>> m = ['aa', 'de', 'ad']
>>> sorted(m, key = methodcaller('count', 'a'))
['de', 'ad', 'aa']
{% endhighlight %}

### Ascending and Descending

`reverse = True`，逆序  
 or `a.reverse()`
{% highlight python %}
sorted(student_tuples, key=itemgetter(2), reverse=True)
{% endhighlight %}

### Sort Stability and Complex Sorts

Starting with Python 2.2, sorts are guaranteed to be stable. That means that when multiple records have the same key, their original order is preserved.  
This wonderful property lets you build complex sorts in a series of sorting steps. For example, to sort the student data by descending grade and then ascending age, do the age sort first and then sort again using grade．

### Odd and Ends

Key functions need not depend directly on the objects being sorted. A key function can also access external resources. For instance, if the student grades are stored in a dictionary, they can be used to sort a separate list of student names.

{% highlight python %}
>>> students = ['dave', 'john', 'jane']
>>> grades = {'john': 'F', 'jane':'A', 'dave': 'C'}
>>> sorted(students, key=grades.__getitem__)
['jane', 'dave', 'john']
{% endhighlight %}