var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Movies = (function () {
    function Movies(title, director) {
        this.title = title;
        this.director = director;
    }
    Movies.prototype.show = function () {
        console.log("Title : " + this.title);
        console.log("Director: " + this.director);
    };
    return Movies;
}());
var Horror = (function (_super) {
    __extends(Horror, _super);
    function Horror(title, director, goreFactor) {
        _super.call(this, title, director);
        this.goreFactor = goreFactor;
        this.goreFactor = goreFactor;
    }
    Horror.prototype.show = function () {
        _super.prototype.show.call(this);
        console.log("Gore Factor: " + this.goreFactor);
    };
    Horror.prototype.scream = function () {
        console.log("Yell");
    };
    return Horror;
}(Movies));
var Drama = (function (_super) {
    __extends(Drama, _super);
    function Drama(title, director, oscarWorthy) {
        _super.call(this, title, director);
        this.oscarWorthy = oscarWorthy;
        this.oscarWorthy = oscarWorthy;
    }
    Drama.prototype.show = function () {
        _super.prototype.show.call(this);
        console.log("Oscar Worthy: " + this.oscarWorthy);
    };
    Drama.prototype.cry = function () {
        console.log("Cryiing!!!!");
    };
    return Drama;
}(Movies));
var Comedy = (function (_super) {
    __extends(Comedy, _super);
    function Comedy(title, director, laughScale) {
        _super.call(this, title, director);
        this.laughScale = laughScale;
        this.laughScale = laughScale;
    }
    Comedy.prototype.show = function () {
        _super.prototype.show.call(this);
        console.log("Laugh Scale : " + this.laughScale);
    };
    Comedy.prototype.laugh = function () {
        console.log("Laugghh");
    };
    return Comedy;
}(Movies));
var comedy = new Comedy("Dumb and Dumber", "Jim Carrey", "Gaffaw");
comedy.show();
comedy.laugh();
