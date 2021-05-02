const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bRectangle, rectangle,circle,hammer;
var ball1, ball2, ball3, ball4,ball5,ball6;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    base = new Base(600,height,1200,20)
    
    bRectangle = new BRectangle(700,320,100,100);
    rectangle = new Rectangle(300,350);
    circle=new Circle(900,450,70);
    hammer = new Hammer(10,100);

    ball1 = new Ball(505,450,10);
    ball2 = new Ball(510,450,10);
    ball3 = new Ball(515,450,10);
    ball4 = new Ball(520,450,10);
    ball5 = new Ball(525,450,10);
    ball6 = new Ball(515,445,10);
    ball7 = new Ball(520,445,10);
    ball8 = new Ball(525,445,10);
    ball9 = new Ball(530,445,10);
    ball10 = new Ball(535,445,10);


}

function draw(){
    background("neavyblue");
    Engine.update(engine);

    bRectangle.display();
    base.display();
    rectangle.display();
    circle.display();

    hammer.display();

    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    ball6.display();
    ball7.display();
    ball8.display();
    ball9.display();
    ball10.display();
}