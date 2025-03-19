# 14 - Inheritance (Lesson)

###### ICS4U - Mr. Brash 🐿

🧍‍♀️  🐳  
Both humans and whales breathe air with lungs. However, humans have legs and whales have fins... 

Humans and whales _inherit_ the trait "lungs" from the mammal _classification_. We are similar in other ways as well - but we also _differ_ in many ways.

Similarly, you have inheritted traits from your ancestors but you also have your own traits that make you unique.

The same can be said about classes (objects) in OOP.

- [1 - Inheritance](#part-1---inheritance)
- [2 - Super!](#part-2---super-🦸🏻)
- [Jump to the task](./PRACTICE.md)


# Part 1 - Inheritance

What if you end up with multiple Classes that contain _similar_ code?

---

When _designing_ an object, you might realize that it requires some or all of the same code as another object you already declared. Like chess pieces for a chess game or geometrical shapes for a graphing program.

An important idiom of programming is **DRY** - **D**on't **R**epeat **Y**ourself. If you can reuse part of another object, you might want to do so.

Let's use real life **animals** as an example:

![](./assets/inheritance_small.png)

All of the animals listed above have ears. They eat. They make noise. They are warm-blooded. But they are different - they make _different_ noises, they eat different foods. They may or may not have fur. What if we included a bird or human?

When declaring classes for these "objects", we might use the following:
![animals](./assets/animals.png)

Notice the arrows from each `subclass` to the `Animal` `superclass`? This means "Dog comes from Animal", etc. All three subclasses have the traits of `Animal`.

In this example, the `Dog` class _extends_ the `Animal` class but adds a few things. Similarly, the `Cat` and `Cow` classes also _extend_ the `Animal` class. They _inherit_ the values and methods from the `Animal` class and have the opportunity to add their own.

**Let's look at a simplified example in JavaScript:**
```JS
// The superclass (parent)
class Animal {
  legs = 2;

  constructor(legs) {
    this.legs = legs;
  }

  speak() {
    console.log("I'm an Animal");
  }
}

// A subclass (child) of Animal
class Dog extends Animal {
  name = "";
  has_fleas = false;

  constructor(name, fleas) {
    this.name = name;
    this.has_fleas = fleas;
    this.legs = 4;    // We still have a "legs" property
  }

  // Override the speak() function
  speak() {
    console.log("WOOF!");
  }  
}
```

🤔 Shouldn't the number `legs` be protected (read-only)? (more on that in a bit)

### Notice the keyword `extends` on the `Dog` class.
This means the `Dog` class will _inherit_ everything already created inside the `Animal` class. We can choose to keep it all or overwrite some of it - like overwriting the `speak()` method.

Let's test instances of a generic `Animal` or a `Dog`:
```JS
let anim = new Animal(6);
let doggo = new Dog("Spot", false);

anim.speak();   // "I'm an Animal"
doggo.speak();  // "WOOF!"
anim.legs       // 6
doggo.legs      // 4
anim.has_fleas  // undefined
doggo.has_fleas // false
anim.name       // undefined
doggo.name      // "Spot"
```

#### ❔Question:
Can you think of some traits that all chess pieces would have but also some ways in which they are unique?

<br>

# Part 2 - Super! 🦸🏻

Let's go back to the `legs` property of our example above. Once an animal is defined and declared, the number of legs should not be editable. For example, the _definition_ of a human is to have 2 legs and a spider is to have 8.

The easy fix is to make `legs` private and add a `get` so it becomes protected:

```JS
// The superclass (parent)
class Animal {
  #legs = 2;

  constructor(legs) {
    this.#legs = legs;
  }

  speak() {
    console.log("I'm an Animal");
  }

  get legs() {
    return this.#legs;
  }
}
```

But that creates a new problem (because of course it does). The `Dog` class, which extends `Animal` can no longer _modify_ the `legs` variable! It is now _**protected**_ because of the `#`.

⚠ In order to set the value of `legs` during instantiation, we need to be able to call the _constructor_ of the **Superclass**.

#### 🦸🏻 The keyword `super` allows us to utilize methods of the parent class.

Let's take another look at the `Dog` class:  
```JS
// The subclass (child) of Animal
class Dog extends Animal {
  name = "";
  has_fleas = false;

  constructor(name, fleas) {
    super(4);               // <-- call the constructor of Animal! 🦸🏻
    this.name = name;
    this.has_fleas = fleas;
  }

  // Override the speak() function
  speak() {
    console.log("WOOF!");
  }  
}
```

In that example, the keyword `super(4)` is taking the place of the `Animal` constructor. It's like calling `new Animal(4)` while we setup the `Dog`.

There's one more use of the `super` keyword. Remember the `speak()` function? We overwrote the method in the subclass, so we have two versions:
```JS
// Inside Animal:
speak() {
  console.log("I'm an Animal");
}

// Inside Dog:
speak() {
  console.log("WOOF!");
}
```

What if, for some reason, we wanted to call the `speak()` function of the **superclass**? Perhaps we create a "What are you?" method inside `Dog` or similar... 

```JS
// Inside Dog:
speak() {
  super.speak();
  console.log("WOOF!");
}
```

Now if we ask a `Dog` object to `speak()` the output will be:
```Text
I'm an Animal
WOOF!
```

### 🤔 Why is that useful?
Perhaps we want to run the superclass method and modify it just a bit. Take a bank account transaction fee as an example. In a normal, no-fee savings account you can credit or debit your account and you aren't charged a fee. However, in a chequing (checking) account you are charged a small fee per transaction. Both account types would need `credit()` and `debit()` methods but the checking account would need to reduce your balance by just a bit each time.

Similarly, some accounts charge for money conversions, transactions from cash machines, or e-transfers.

Each account type could _inherit_ from a parent `Account` class and utilize the parent `super.debit()` and `super.credit()` methods but modify the balance during the transaction.

#### There is an example of inheritance and the use of `super` in the [example.js](./example.js) file.


### Any Questions?

If not - [head to the practice (classwork) for the day](./PRACTICE.md).

<br>

🐿️
