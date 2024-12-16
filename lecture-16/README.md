# JavaScript String Methods 

### JavaScript String Length
The length property returns the length of a string:


### Extracting String Characters
 at(position) Method
 charAt(position) Method
 charCodeAt(position) Method
Using property access [] like in arrays


### JavaScript String charAt()
The charAt() method returns the character at a specified index (position) in a string:


### JavaScript String charCodeAt()
The charCodeAt() method returns the code of the character at a specified index in a string:

The method returns a `UTF-16 `code (an integer between `0` and `65535`).

### JavaScript String at()


at() method returns an indexed element from a string:

### Difference between `charAt()` and `at()`

The at() method is a new addition to JavaScript.

It allows the use of `negative indexes` while charAt() do not.

Now you can use myString.at(-2) instead of charAt(myString.length-2).

### Property Access [ ]

Property access might be a little unpredictable:

It makes strings look like arrays (but they are not)
If no character is found, [ ] returns undefined, while charAt() returns an empty string.
It is read only. str[0] = "A" gives no error (but does not work!)


# Extracting String Parts


