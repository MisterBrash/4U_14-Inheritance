/**
 * Example Superclass with inheritting subclass.
 * Includes sample test code at the end.
 * 
 * The Fork extends Utensil
 * Author: 🐿️, March 2025
 */

/* Example Superclass - a generic Utensil for eating */
class Utensil {
  #material = "Stainless Steel";
  #clean = true;

  /**
   * Constructor
   * @param {String} matter What is the untensil made out of?
   * @param {boolean} cleanliness Whether the utensil is clean or not.
   */
  constructor(matter, cleanliness) {
    this.#material = matter;
    this.#clean = cleanliness;
  }

  /**
   * Gets and sets for validation and protection
   */
  get clean() { return this.#clean; }
  set clean(val) { 
    if (typeof val == "boolean")
      this.#clean = val;
  }
  get material() { return this.#material; }

  /**
   * Clean the Utensil, gets inheritted.
   */
  wash() {
    this.clean = true;
  }

  /**
   * Convert to a String
   * @returns String representation of the object.
   */
  toString() {
    let c = this.#clean ? "clean" : "dirty";
    return `I am a ${c}, ${this.#material} Utensil.`;
  }
}

/* Example subclass - a Fork which inherits from Utensil */
class Fork extends Utensil {
  #tines = 3;
  #type = "dinner";

  /**
   * Constructor
   * @param {String} material 
   * @param {boolean} cleanliness 
   * @param {Number} tines 
   * @param {String} type 
   */
  constructor(material, cleanliness, tines, type) {
    super(material, cleanliness);
    this.#tines = tines;
    this.#type = type;
  }

  /**
   * Override the superclass toString()
   * @returns A string representation of the fork.
   */
  toString() {
    let c = this.clean ? "clean" : "dirty"; 
    return `I am a ${c}, ${this.material} ${this.#type} Fork with ${this.#tines} tines.`;
  }
}

// Create a dirty fork and print it out
let dessert_fork = new Fork("wooden", false, 4, "dessert");
console.log("\n", dessert_fork.toString());

// Wash the fork and print again
dessert_fork.wash();
console.log("\n", dessert_fork.toString(), "\n");
