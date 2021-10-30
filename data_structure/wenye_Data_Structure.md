<h1>Chapter 1</h1>

<h2>Memory</h2>

**bit:**  basic unit memory is called a bit, 0 or 1

**byte:** the smallest unit on which the hardware operates, 8 consecutive bits

**word:** the number of bytes and the order of bytes in a word vary from machine to 		machine

![image-20211030200632892](C:\Users\86183\AppData\Roaming\Typora\typora-user-images\image-20211030200632892.png)

**static data:** never created or destroyed as program runs, such as named constants

**heap:** When a new object is created, Java allocates space from heap

**reference:** Java identifies an object by its address in memory. That address is called a reference.

**garbage:** created in the intermediate step but not referenced by the final stack

> When memory is running short, Java does garbage collection
>
> + Mark the objects referenced by variables on stack or in static storage. 
>
> + Sweep all objects in the heap, reclaim unmarked objects (garbage). 



<u>In java, primitive types and objects are passed differently as arguments</u>

![image-20211030204136747](C:\Users\86183\AppData\Roaming\Typora\typora-user-images\image-20211030204136747.png)

When you pass an argument of a **primitive type** to a method, Java copies the **value** of the argument into the parameter variable. As a result, changes to the parameter variable have **no effect** on the argument.

![image-20211030204151176](C:\Users\86183\AppData\Roaming\Typora\typora-user-images\image-20211030204151176.png)

When you pass an **object** as an argument, java copies the **reference** of the argument into that parameter variable. Thus, any changes that you make to the instance variables *inside* an object have a permanent effect on the object.



<h1>Chapter 2</h1>

<h2>Arrays</h2>

+ An ordered collection of values
+ fixed length
+ Homogeneous: Each value in the array is of the same type

**elements:** The individual values in an array

**length:** The number of elements

**index:** Each element is identified by its position in the array; begins with 0

```java
type[ ] identifier = new type[length];
```



**Applications**

1. <u>Passing arrays as parameters</u> (primitive types vs objects)

   ```
   swapElements(array[i], array[n – i – 1]) // wrong
       
   swapElements(array, i, n – i – 1)
   ```

2. Two-dimensional array

   ![image-20211030213642331](C:\Users\86183\AppData\Roaming\Typora\typora-user-images\image-20211030213642331.png)

3. ![image-20211030215136516](C:\Users\86183\AppData\Roaming\Typora\typora-user-images\image-20211030215136516.png)

   An array containing ASCII codes for each character in the string.



<h1>Chapter 3</h1>

<h2>List (Linked List)</h2>

**Linked list:** collection of nodes in which one node is connected to another node

+ a linear data structure
+ support different data types in a linked list

+ linked list elements are not stored at a contiguous location; they are linked using pointers

>  Advantages

1. Dynamic data structure: 

   The size of a linked list is not fixed as it can vary according to requirements. 

2. Insertion and Deletion: 

   If we want to insert or delete the element in an array, then we need to shift the elements for creating the space. In a linked list, we do not have to shift the elements. We just need to update the address of the pointer in the node. 

3. Memory efficient:

   Its memory consumption is efficient as the size of the linked list can grow

   or shrink according to our requirements.

> Disadvantages

1. Memory usage

   The node in a linked list occupies more memory than array as each node occupies two types of variables, 

2. Traversal

   In an array, we can randomly access the element by index. In a linked list, the traversal is not easy. If we want to access the element in a linked list, we cannot access the element randomly. 

3. Reverse traversing

   In a linked list, backtracking or reverse traversing is difficult. 

   In a doubly linked list, it is easier but requires more memory to store the back pointer.



**Applications**

1. Polynomial

   ![image-20211030221341639](C:\Users\86183\AppData\Roaming\Typora\typora-user-images\image-20211030221341639.png)

2. Sparse Matrix

   ![image-20211030221432426](C:\Users\86183\AppData\Roaming\Typora\typora-user-images\image-20211030221432426.png)



**Different types of linked list**

1. Singly Linked List
2. Doubly Linked List
3. Circular Linked List
4. Doubly Circular Linked List



> Cautions

1. 在操作linked list的nodes时，需要注意操作顺序

   我们在进行任何操作时都只有一个可供参考的指针（无论是head，还是自行建立的current），因此在添加new node时，如果添加处后面还有其他元素，<u>必须先将new node的next指针接上后续list，再将我们的参考指针指向new node</u>

2. 每次进行iteration都一定要记得判断next指针的对象是否为null

**Implementation**

> use two pointers
>
> + different start point
> + different speed

1. different start point

   ![image-20211030224148744](C:\Users\86183\AppData\Roaming\Typora\typora-user-images\image-20211030224148744.png)

2.  different speed

   ![image-20211030224302621](C:\Users\86183\AppData\Roaming\Typora\typora-user-images\image-20211030224302621.png)

3. two ways to reverse a linked list from a certain node

   ![image-20211030224850304](C:\Users\86183\AppData\Roaming\Typora\typora-user-images\image-20211030224850304.png)

   ![image-20211030224901824](C:\Users\86183\AppData\Roaming\Typora\typora-user-images\image-20211030224901824.png)

