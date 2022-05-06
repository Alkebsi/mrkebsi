/*

********************************************************

》~ Project: MKebsi - My Personal Website 
》~ Version: v1.0.0
》~ Online Demo: https://mrkebsi.github.io/

********************************************************

*/ 

// The Loading
let loading =
document.getElementById("loading");

// The (mobile) navigation bar elements
let rPanel = 
document.getElementById("rpanel");
let dots =
document.getElementsByClassName("dots");
let dotsCon =
document.getElementById("dots-con");
let navLogo =
document.getElementById("nav-logo");

// Making the Letter Hover Effect
let lHover = 
document.getElementsByClassName("hover")[0];
if (lHover)
    {
        lHover.onmouseover = e => {
            e.target.innerHTML = e.target.innerText.replace(/([\w\d+×÷=/_<>!@#$%^&*-:;,?€£¥₩~`])/g, '<span>$1</span>'); 
        };
    }
else
    {
        //Do Nothing
    }

// The SVG Glitch Filters
let glitch = [
    "<svg class='roboglitchfilter' id='svg-filters' width='100vw' height='100vh' style='position: absolute; visibility: hidden; pointer-events: none;' version='1.1' xmlns='http://www.w3.org/2000/svg'>",
    "<defs>",
    "<filter id='svg-glitch1' width='100vw' height='100vw' x='-20%' y='-20%' color-interpolation-filters='sRGB' preserveAspectRatio='none'>",
    "<feFlood x='-30%' y='-30%' width='160%' height='160%' flood-color='rgb(128, 0, 128)' result='FEIMG-NO-TRANSFORM' />",
    "<feFlood x='-30%' y='-30%' width='160%' height='6px' flood-color='rgb(256, 0, 128)' result='FEIMG-XMAX'>",
    "<animate attributeName='height' values='6px; 1px; 6px' dur='4s' repeatCount='indefinite' begin='0' />",
    "<animate attributeName='y' values='0px; 45px; 20px; 28px; 10px; 15px; 40px' dur='2.5s' repeatCount='indefinite' begin='0' />",
    "</feFlood>",
    "<feFlood x='-30%' y='-30%' width='160%' height='6px' flood-color='rgb(0, 0, 256)' result='FEIMG-XMIN'>",
    "<animate attributeName='height' values='6px; 12px; 4px' dur='6s' repeatCount='indefinite' begin='0' />",
    "<animate attributeName='y' values='43px; 0px; 10px; 32px; 7px; 18px; 38px; 9px; 20px; 0px; 43px' dur='5s' repeatCount='indefinite' begin='0' />",
    "</feFlood>",
    "<feMerge result='MERGE'>",
    "<feMergeNode in='FEIMG-NO-TRANSFORM' />",
    "<feMergeNode in='FEIMG-XMAX' />",
    "<feMergeNode in='FEIMG-XMIN' />",
    "</feMerge>",
    "<feDropShadow in='SourceGraphic' dx='0' dy='0' stdDeviation='0' flood-color='var(--red)' result='SHADOW_RED'>",
    "<animate class='anim' calcMode='discrete' attributeName='dx' values='0; 0; 0; 0; 2; 0; 5; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; -3; 0; 0; -2; 0; 0; 0; 0; 0; 2; 0; 0; 4; 0; -3; 0; -4; 0; 0; 2; 0; 0; 5; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0' dur='4s' repeatCount='indefinite' begin='0' fill='freeze' />",
    "<animate class='anim' calcMode='discrete' attributeName='dy' values='0; 0; -1; 0; 0; 0; 0; 0; 3; 0; 0; 0; 0; 0; 5; 0; 0; 0; 0; 0; 2; 0; 0; -4; -3; 0; 0; 0; 2; -1; 3; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0' dur='5.5s' repeatCount='indefinite' begin='0' fill='freeze' />",
    "</feDropShadow>",
    "<feDropShadow in='SourceGraphic' dx='0' dy='0' stdDeviation='0' flood-color='var(--blue)' result='SHADOW_AQUA'>",
    "<animate class='anim' calcMode='discrete' attributeName='dx' values='0; 0; 0; 0; 0; 0; .2; 0; 0; 0; -1; 0; 0; 0; 0; 0; 0; 4; 0; 0; 0; 0; 0; 0; 3; 0; 0; 0; 0; -3; 0; 0; 0; 2; 0; 1; 4; 0; 0; 0; 0; 0; 0; 5; 0; 0; -3; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0' dur='4.5s' repeatCount='indefinite' begin='0' fill='freeze' />",
    "<animate class='anim' calcMode='discrete' attributeName='dy' values='0; 0; 2; 0; 0; 0; 0; 0; 0; 0; -2; 0; 0; 0; -4; 0; 0; 0; 0; -3; 0; 0; 0; 5; 3; 0; 0; 0; 0; 0; 0; 0; -2; 0; 0; 0; 4; 0; 0; 0; 0; 0; 0; 0; 0; 0; -1; 0; 0; 0; 0; 0; 0; 0; 0; 0' dur='5.7s' repeatCount='indefinite' begin='0' fill='freeze' />",
    "</feDropShadow>",
    "<feBlend in='SHADOW_RED' in2='SHADOW_AQUA' result='BLEND_SHADOW' mode='screen' />",
    "<feDisplacementMap in='BLEND_SHADOW' in2='MERGE' scale='5' xChannelSelector='R' yChannelSelector='B'>",
    "<animate attributeName='scale' values='-5; 2.5; 0; 5; 1.5; 4; -1; -4; 2; -2.5; 15; 3' dur='6s' repeatCount='indefinite' begin='0' />",
    "</feDisplacementMap>",
    "</filter>",
    "<filter id='svg-glitch2'>",
    "<feFlood flood-color='var(--transparent)' result='var(--transparent)' />",
    "<feFlood flood-color='red' result='flood1'/>",
    "<feFlood flood-color='limegreen' result='flood2' />",
    "<feOffset in='SourceGraphic' dx='3' dy='0' result='off1a'/>",
    "<feOffset in='SourceGraphic' dx='2' dy='0' result='off1b'/>",
    "<feOffset in='SourceGraphic' dx='-3' dy='0' result='off2a'/>",
    "<feOffset in='SourceGraphic' dx='-2' dy='0' result='off2b'/>",
    "<feComposite in='flood1' in2='off1a' operator='in'result='comp1' />",
    "<feComposite in='flood2' in2='off2a' operator='in' result='comp2' />",
    "<feMerge x='0' width='100%' result='merge1'>",
    "<feMergeNode in = 'var(--transparent)' />",
    "<feMergeNode in = 'comp1' />",
    "<feMergeNode in = 'off1b' />",
    "<animate attributeName='y' id = 'y' dur ='4s'",
    "values = '104px; 104px; 30px; 105px; 30px; 2px; 2px; 50px; 40px; 105px; 105px; 20px; 6ßpx; 40px; 104px; 40px; 70px; 10px; 30px; 104px; 102px'",
    "keyTimes = '0; 0.362; 0.368; 0.421; 0.440; 0.477; 0.518; 0.564; 0.593; 0.613; 0.644; 0.693; 0.721; 0.736; 0.772; 0.818; 0.844; 0.894; 0.925; 0.939; 1'",
    "repeatCount = 'indefinite' />",
    "<animate attributeName='height' id = 'h' dur ='4s'",
    "values = '10px; 0px; 10px; 30px; 50px; 0px; 10px; 0px; 0px; 0px; 10px; 50px; 40px; 0px; 0px; 0px; 40px; 30px; 10px; 0px; 50px'",
    "keyTimes = '0; 0.362; 0.368; 0.421; 0.440; 0.477; 0.518; 0.564; 0.593; 0.613; 0.644; 0.693; 0.721; 0.736; 0.772; 0.818; 0.844; 0.894; 0.925; 0.939; 1'",
    "repeatCount = 'indefinite' />",
    "</feMerge>",
    "<feMerge x='0' width='100%' y='60px' height='65px' result='merge2'>",
    "<feMergeNode in = 'var(--transparent)' />",
    "<feMergeNode in = 'comp2' />",
    "<feMergeNode in = 'off2b' />",
    "<animate attributeName='y' id = 'y' dur ='4s'",
    "values = '103px; 104px; 69px; 53px; 42px; 104px; 78px; 89px; 96px; 100px; 67px; 50px; 96px; 66px; 88px; 42px; 13px; 100px; 100px; 104px;'",
    "keyTimes = '0; 0.055; 0.100; 0.125; 0.159; 0.182; 0.202; 0.236; 0.268; 0.326; 0.357; 0.400; 0.408; 0.461; 0.493; 0.513; 0.548; 0.577; 0.613; 1'",
    "repeatCount = 'indefinite' />",
    "<animate attributeName='height' id = 'h' dur = '4s'",
    "values = '0px; 0px; 0px; 16px; 16px; 12px; 12px; 0px; 0px; 5px; 10px; 22px; 33px; 11px; 0px; 0px; 10px'",
    "keyTimes = '0; 0.055; 0.100; 0.125; 0.159; 0.182; 0.202; 0.236; 0.268; 0.326; 0.357; 0.400; 0.408; 0.461; 0.493; 0.513;1'",
    "repeatCount = 'indefinite' />",
    "</feMerge>",
    "<feMerge>",
    "<feMergeNode in='SourceGraphic' />",
    "<feMergeNode in='merge1' />",
    "<feMergeNode in='merge2' />",
    "</feMerge>",
    "</filter>",
    "<filter id='svg-glitch-stuck' width='100vw' height='100vw' x='-20%' y='-20%' color-interpolation-filters='sRGB' preserveAspectRatio='none'>",
    "<feFlood x='-30%' y='-30%' width='160%' height='160%' flood-color='rgb(128, 0, 128)' result='FEIMG-NO-TRANSFORM' />",
    "<feFlood x='-30%' y='-30%' width='160%' height='6px' flood-color='rgb(256, 0, 128)' result='FEIMG-XMAX'></feFlood>",
    "<feFlood x='-30%' y='-30%' width='160%' height='6px' flood-color='rgb(0, 0, 256)' result='FEIMG-XMIN'></feFlood>",
    "<feMerge result='MERGE'>",
    "<feMergeNode in='FEIMG-NO-TRANSFORM' />",
    "<feMergeNode in='FEIMG-XMAX' />",
    "<feMergeNode in='FEIMG-XMIN' />",
    "</feMerge>",
    "<feDropShadow in='SourceGraphic' dx='1' dy='1' stdDeviation='0' flood-color='var(--red)' result='SHADOW_RED'></feDropShadow>",
    "<feDropShadow in='SourceGraphic' dx='-1' dy='-1' stdDeviation='0' flood-color='var(--blue)' result='SHADOW_AQUA'></feDropShadow>",
    "<feBlend in='SHADOW_RED' in2='SHADOW_AQUA' result='BLEND_SHADOW' mode='screen' />",
    "</filter>",
    "<linearGradient id='red-grad' x1='0%' y1='0%' x2='100%' y2='100%'>",
    "<stop offset='0%'",
    "style='stop-color:#ff6b1c;stop-opacity:1' />",
    "<stop offset='100%'",
    "style='stop-color:#ff0000;stop-opacity:1' />",
    "</linearGradient>",
    "<filter id='svg-glow' x='0' y='0' width='200%' height='200%'>",
    "<feOffset result='offOut' in='SourceGraphic' dx='20' dy='20' />",
    "<feGaussianBlur result='blurOut' in='offOut' stdDeviation='10' />",
    "<feBlend in='SourceGraphic' in2='blurOut' mode='normal' />",
    "</filter>",
    "</defs>",
    "</svg>"
];
let filterSigner =
document.getElementById("svg-filters-signer");
filterSigner.innerHTML = glitch.join(""); // I call this here since I want it to ignite before the loading bar vanishes

// Calling the quotes
let decQuote =
document.getElementById("decision-quote");
let readQuote =
document.getElementById("reading-quote");



// Main Functions
function Start()
{
    // Removing the loading panel
    loading.style.opacity = '0';
    let loadingTimeMgr = setInterval(function(){loading.style.display = "none";}, 1000);
    
    // Setting the Qoutes
    if (decQuote)
        {
            decQuote.innerHTML = Quotes("decision");
        }
    else if(readQuote)
        {
            readQuote.innerHTML = Quotes("reading");
        }
    else
        {
            // Do Nothing
        }
}

// Managing the right navigation panel (mobile)
function RP(x)
{
    if(x)
        {
            rPanel.style.clipPath = "polygon(0% 0%, 100% 0%, 0% 100%)";
            dotsCon.style.left = "20px";
            for(let i = 0; i < 3; i++)
                {
                    dots[i].style.margin = "-9px";
                    dots[i].style.top = "20px";
                    dots[i].style.width = "40px";
                    dots[i].style.background = "var(--dark)";
                }
        }
    else
        {
            rPanel.style.clipPath = "polygon(0% 0%, 0% 0%, 0% 100%)";
            dotsCon.style.left = "10px";
            for(let i = 0; i < 3; i++)
                {
                    dots[i].style.margin = "4px 0";
                    dots[i].style.top = "0";
                    dots[i].style.width = "9px";
                    dots[i].style.background = "var(--white)";
                }
        }
}

//Quotes Randomizer
function Quotes(s)
{
    //the final return
    let backQ;
    
    //Setting the quotes with their categories
    let decQ = [
        "When you reach the end of your rope, tie a knot in it and hang on.", 
        "The most difficult thing is the decision to act, the rest is merely tenacity.",
        "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        "Never let the fear of striking out keep you from playing the game.", 
        "You only live once, but if you do it right, once is enough.",
        "You miss 100% of the shots you don't take.",
        "Life is really simple, but we insist on making it complicated.",
        "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
        "In three words I can sum up everything I've learned about life: it goes on.",
        "Life is trying things to see if they work."
    ];
    let readQ = [
        "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        "Life is what happens when you're busy making other plans.",
        "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "The person who you will be in five years is based on the things you read and the people you hang around with.",
        "The best and most beautiful things in the world cannot be seen or even touched, they must be felt with the heart.",
        "Success usually comes to those who are too busy to be looking for it.",
        "Whether you think you can or you think you can't, you're right.",
        "Sometimes, the heart's feelings work better than the brain thoughts.",
        "A minute of reading is worth an hour of testing."
    ];
    
    //Setting the randomizer (variable)
    let r = Math.floor(Math.random() * 10);
    
    //Checking the category 
    if(s == "decision")
        {
            backQ = decQ[r];
        }
    else if(s == "reading")
        {
            backQ = readQ[r];
        }
    else
        {
            backQ = decQ[r];
        }
    
    //Assigning the result to the function 
    return backQ;
}

//*Setting Particles to the background 
document.getElementById("particles").style.height =
document.getElementsByTagName("body")[0].offsetHeight +  "px";
particlesJS('particles',
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": ["#ff6b1c", "#00ffff", "#ffffff", "#00ff00"]
      },
      "shape": {
        "type": ["circle", "triangle"],
        "stroke": {
          "width": 0
        },
        "polygon": {
          "nb_sides": 6
        }
      },
      "opacity": {
        "value": 1
      },
      "size": {
        "value": 5,
        "random": true
      },
      "line_linked": {
        "enable": false
      },
      "move": {
        "enable": true,
        "speed": 6
      }
    },
    "interactivity": {
      "events": {
        "onhover": {
          "enable": false
        },
        "onclick": {
          "enable": false
        },
        "resize": true
      }
    }
  }
);
//*/

//The loading animation manager
let logoAnime = document.getElementsByClassName("cls-2");
let logoAnimCon = document.getElementById("logo-con");
anime({
    targets: logoAnime[0],
    translateX: -18.2,
    d: 'M22.59,19.08V49.8A11.77,11.77,0,0,1,10.81,38V7.3A11.78,11.78,0,0,1,22.59,19.08Z',
    loop: true, 
    direction: 'alternate',
    duration: 2000,
    easing: 'easeInOutQuint'
});
anime({
    targets: logoAnime[1],
    translateX: 18.2,
    rotate: 720,
    d: 'M59.2,7.3V38A11.78,11.78,0,0,1,47.41,49.8V19.08A11.79,11.79,0,0,1,59.2,7.3Z',
    loop: true, 
    direction: 'alternate',
    duration: 2000,
    easing: 'easeInOutExpo'
});
anime({
    targets: logoAnime[2],
    baseFrequency: 1, 
    d: 'M40.89,16.42v40.4a5.89,5.89,0,0,1-11.78,0V16.42a5.89,5.89,0,1,1,11.78,0Z',
    scale: 1, 
    loop: true, 
    direction: 'alternate',
    duration: 2000,
    easing: 'easeInOutExpo'
});

//The three dots (mobile) animation manager
let dotsAnime =
document.getElementsByClassName("dots");
anime({
    targets: dotsAnime[0],
    translateX: 31,
    duration: 1000,
    delay: 10,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutExpo'
});
anime({
    targets: dotsAnime[1],
    translateX: 31,
    duration: 1000,
    delay: 30,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutExpo'
});
anime({
    targets: dotsAnime[2],
    translateX: 31,
    direction: 'alternate',
    duration: 1000,
    delay: 50,
    loop: true,
    easing: 'easeInOutExpo'
});

//Animating the typing effect for the loading section of the website
let quotes = new Typed('#motivationals', {
    strings: [
        '<i>"Our patience will achieve more than our force."</i>',
        '<i>"If life were predictable it would cease to be life, and be without flavor."</i>',
        '<i>"The two most powerful warriors are patience and time."</i>',
        '<i>"Don\'t judge each day by the harvest you reap but by the seeds that you plant."</i>',
        '<i>"To lose patience is to lose the battle."</i>',
        '<i>"It is during our darkest moments that we must focus to see the light."</i>',
        '<i>"Patience attracts happiness; it brings near that which is far."</i>',
        '<i>"Learning patience can be a difficult experience, but once conquered, you will find life is easier."</i>',
        '<i>"Patience is not the ability to wait, but the ability to keep a good attitude while waiting."</i>',
        '<i>"One minute of patience, ten years of peace."</i>',
        '<i>"Patience and perseverance have a magical effect before which difficulties disappear and obstacles vanish."</i>',
        '<i>"Patience is the best remedy for every trouble."</i>',
        '<i>"One moment of patience may ward off great disaster. One moment of impatience may ruin a whole life."</i>',
        '<i>"Two things define you: your patience when you have nothing and your attitude when you have everything."</i>',
        '<i>"Trees that are slow to grow bear the best fruit."</i>',
        '<i>"We could never learn to be brave and patient, if there were only joy in the world."</i>',
        '<i>"Do not go where the path may lead, go instead where there is no path and leave a trail."</i>',
        '<i>"Never let the fear of striking out keep you from playing the game."</i>',
        '<i>"Life is either a daring adventure or nothing at all."</i>',
        '<i>"Many of life\'s failures are people who did not realize how close they were to success when they gave up."</i>',
        '<i>"Life is a long lesson in humility."</i>'
    ],
    typeSpeed: 0,
    backSpeed: 10,
    cursorChar: '',
    backDelay: 5000,
    startDelay: 100,
    loop: true
  });
  let quotesOwners = new Typed('#quote-owner', {
    strings: [
        '<i>_Edmund Burke</i>',
        '<i>_Eleanor Roosevelt</i>',
        '<i>_Leo Tolstoy</i>',
        '<i>_Robert Louis Stevenson</i>',
        '<i>_Mahatma Gandhi</i>',
        '<i>_Aristotle</i>',
        '<i>_Swahili Proverbs</i>',
        '<i>_Catherine Pulsifer</i>',
        '<i>_Unknowns</i>',
        '<i>_Greek Proverbs</i>',
        '<i>_John Quincy Adams</i>',
        '<i>_Plautus</i>',
        '<i>_Chinese Proverbs</i>',
        '<i>_George Bernard Shaw</i>',
        '<i>_Molière</i>',
        '<i>_Helen Keller</i>',
        '<i>_Ralph Waldo Emerson</i>',
        '<i>_Babe Ruth</i>',
        '<i>_Thomas A. Edison</i>',
        '<i>_James M. Barrie</i>'
    ],
    typeSpeed: 0,
    backSpeed: 10,
    cursorChar: '',
    backDelay: 1000,
    startDelay: 100,
    loop: true
  });

// Calling the Animation-On-Scroll Library 
AOS.init();
AOS.refresh();