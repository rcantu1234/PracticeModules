class Movies {
  public title: string;
  public director: string;

  constructor(title: string, director: string) {
    this.title = title;
    this.director = director;
  }

   show() {
    console.log(`Title : ${this.title}`;
    console.log(`Director: ${this.director}`);
  }
}
// let movie = new Movies("The Birds", "Hitchcock");
// movie.show();

class Horror extends Movies{
  public goreFactor: number;

  constructor(title: string, director: string, public goreFactor: number) {
    super(title, director);
    this.goreFactor = goreFactor;
  }

  show() {
    super.show();
    console.log(`Gore Factor: ${this.goreFactor}`);
  }

  scream() {
    console.log("Yell")
  }
}

// let horror = new Horror("Fright Night", "Wes Craven", 8);
// horror.show();
// horror.scream();

class Drama extends Movies {
  public oscarWorthy: boolean;

  constructor(title, director, public oscarWorthy: boolean) {
    super(title, director);
    this.oscarWorthy = oscarWorthy;
  }

  show() {
    super.show();
    console.log(`Oscar Worthy: ${this.oscarWorthy}`);
  }

  cry () {
    console.log("Cryiing!!!!")
  }
}
//
// let drama = new Drama("Godfather", "Copolla", true);
// drama.cry();
// drama.show();

class Comedy extends Movies {
  public laughScale: string;

  constructor(title: string, director: string, public laughScale: string) {
    super(title, director);
    this.laughScale = laughScale;
  }

  show() {
    super.show();
    console.log(`Laugh Scale : ${this.laughScale}`);
  }

  laugh() {
    console.log("Laugghh");
  }
}

let comedy = new Comedy("Dumb and Dumber", "Jim Carrey", "Gaffaw");
comedy.show();
comedy.laugh();
