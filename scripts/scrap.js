class Pet {
    constructor(animal, age, breed, sound) {
      this.animal = animal;
      this.age = age;
      this.breed = breed;
      this.sound = sound;
    }
    
    get activity(){
      const today = new Date(); //will show the date of today using this built-in method
      const hour = today.getHours();
    
      if (hour > 8 && hour <=20) {
        return 'playing';
      }  else {
        return 'sleeping';
      }
    
    }
    
    get owner() {
      return this._owner;
    }
    
    set owner(owner) {
      this._owner = owner;
      console.log('setter called: ${owner}');
    }
    
    speak(){
      console.log(this.sound);
    }
    
  }
  
  
  class Owner {
    constructor(name, address) {
      this.name = name;
      this.address = address;
    }
    
    set phone(phone) {
      const phoneNormalized = phone.replace(/[^0-9]/g, '');
      this._phone = phoneNormalized;
    }
  
    get phone() {
      return this._phone;
    }
  }
  
  
  
  
  const ernie = new Pet('dog', 1, 'pug', 'yip yip');
  
  const bronn = new Pet('dog', 7, 'mutt', 'baroo');
  
  const luna = new Pet('cat', 5, 'unknown', 'mew mew');
  
  bronn.owner = new Owner('Kirstyn', '123 Main Street');
  bronn.owner.phone = '123-456-7890';
  
  console.log(bronn.owner);





  
  //Another example with functions inside:

  class Student {
    constructor(gpa, credits){
        this.gpa = gpa;
        this.credits = credits;
    }

    stringGPA() {
        return this.gpa.toString();
    }

    get level() {
        if (this.credits > 90 ) {
            return 'Senior';
        } else if (this.credits > 60) {
            return 'Junior';
        } else if (this.credits > 30) {
            return 'Sophomore';
        } else {
            return 'Freshman';
        }
    }
  set major(major) {


    if ( this.level === 'Senior' || this.level === 'Junior') {
      this._major = major;
      return this._major;
    } else {
      this._major = 'none';
    return this._major; 
    }

  }
}

var student = new Student(3.9, 60);
  