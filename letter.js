var i = 0;
var txt1 = `
Pyaaari Anjalii >>

Uff.. tum kitni jaldi gussa ho jati ho yar 😂 but pighal bhi utni hi>
jaldi jate ho. Ab mei kya bolu, tum ho itni pyaari ki tumhe humesha>
tang karne ka mann karta h. baad mei thodi na kar paunga 😤. Jab bhi>
tumhare bare m soch ta hu I wish I could just pull you closer and hug>
you real tight, getting lost in those twinkling eyes of yours. >>

You keep saying that you are so badtameez, cold-hearted, haiwaan this and that>
lekin.. why do I feel like you are putting up some thick wall around you>
acting all tough but deep down you just want to talk, want someone with whom>
you can share how your day went, your deepest insecurities... in short you want to trust>
but are just afraid that it might be broken.>>

In you, I have found a kindred spirit, a person so cheerful who can brighten my day >
more than the sun ever can. You embody the true essence of kindness and compassion. >
Your selflessness shines through your sheer passion to serve the country. I really >
respect you a lot for the same and also super proud of ya.>>

Tumhare bare m soch te hi I start smiling. Your voice notes, uff.. jitni baar bhi sunu>
man bhar ta hi nahi h. Pata h jab jab I receive a notification, I wish it was from you>
I wish I got a cute sa voice note from you. Anjaliiii, I lovee youuuu khooob sara.>
Ab jitni baar bhi bolu, kam hi h. Thoda toh smile kar do 👉👈. I really wish I could>
hold your hand and feel like the luckiest man. ugghhh, itni dooor kyu ho.>>

Anjaliii piee, I know this would never be your intentions but sometimes na jane anjane>
m people end up hurting the ones closest to them. You are kinda young, and it's only>
natural to do stuff impulsively. But sometimes usi impulsiveness ke wajeh se you do stuff>
that you really don't want to do. Iss se kya hoga ki, baaki logon ka choro, you would be >
hurting yourself the most. And it is evident from the fact how often you say sorryy.>
Pyaari anjali if I have hurt you in any way, sorrry da. Lovee youu. 

Regards >
Jeevan
`
var speed = 50;
typeWriter();
function typeWriter() {
    if (i < txt1.length) {
        if (txt1.charAt(i) == '<')
            document.getElementById("text1").innerHTML += '</br>'
        else if (txt1.charAt(i) == '>')
            document.getElementById("text1").innerHTML += '</br>'
        else
            document.getElementById("text1").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
