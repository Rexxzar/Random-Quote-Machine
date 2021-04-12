import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import {Helmet} from "react-helmet";

import reportWebVitals from './reportWebVitals';


const Headerquotes=["Develop an endless curiosity about this world. ","Memorize something everyday.","Constantly try to reduce your attachment to possessions.","Remember people’s names so that they feel appreciated and for your own future benefit when you want something from that person.","Get fit!It’s ridiculous to think that we have one body, one sole means of functioning, and people are too lazy to take care of themselves.","Learn to focus only on the present.The past is unchangeable so it is futile to reflect on it unless you are making sure you do not repeat past mistakes."
,"Even more specifically, live in THIS moment.","Even 10 minutes ago is the past. If you live purely in this moment you will always be happy because there is nothing wrong in this split-second"
,"Smile more oftenWhenever you get a grin on your face, your brain is releasing serotonin, the happy hormone"
,"Drink water, Hydration is tremendously important for overall health. Soda has absolutely ZERO nutritional content; it’s like pouring a punch of sugar and syrup into your cup"
,"Don’t take life so seriously!Learn to laugh at the little things and this whole “existence” thing will be a whole lot easier"
,"Think positive thoughts.When you find yourself thinking a negative thought, stop it immediately by any means necessary."
,"ead books.Knowledge is power. If you’re looking for some mind-blowing books to read"
,"Get in the sun.Superman was completely re-energized when he flew out to space and soaked in some rays and you can do the same right outside your front door"
,"Help others."
,"Set aside a specific time to worry each day.Ponder all of your problems and anxieties during that time so that they will not distract you during work or moments of pleasure"
,"Be honest at all times.Lies lead to nothing but trouble"
,"Sleep less.Fully adjusting to a new sleep cycle can take up to 21 days so don’t give up if you feel tired after switching to 5-hour nights. The “required” 8 hour/night is for normal people"
,"Read “Bringers of Light” and “Conversations with God” by Neale Donald Walsch.These books will help you decide what you want to do in this life and how to get to that point"
,"Figure out what your goals and dreams are.So many people wander aimlessly through life simply go for whatever small thing they want moment by moment"
,"tart your day off right.Wake up and set aside an hour for personal development activities (meditation, self-introspection, observing nature, etc.) Do the things that make you feel blissful, optimistic and empowered"
,"Utilize ‘The Burning Method.’Whenever a fear or worry or complaint comes to mind, close your eyes and imagine writing down the thought on a piece of paper. Then proceed to light the paper and fire and watch it disintegrate"
,"Travel. Anyone who has ever gone anywhere will tell you that traveling is one of the most exciting and life-changing activities that you can do. Observing a different culture will expand your mind while making you further appreciate the life you already live"
,"The Rubber Band MethodThis is the third and final way to rid yourself of negative thoughts (hopefully by now you have figured out that this is very important!). Place a rubber band around your wrist and snap it against your skin anytime a negative thought finds its way into your head. This operant conditioning technique associates a slight pain with negative thoughts like Pavlov associated food/salivation with the sound of a bell. Sounds a bit cruel at first but it only stings for a second, I promise. Plus the outcome, having only positive thoughts, far outweighs a little slap on the wrist here and there"
,"Learn to be unaffected by the words of others.Most people get very upset when they are called negative names by others, but there is a simple trick to overcoming this"
,"Read “Zen and the Art of Happiness” by Chris Prentiss.This book will give you the knowledge and instruction to be happy at all times regardless of the circumstances. Yes, this sounds like an oversimplification of happiness, but I assure you that this book will change you in an amazing way."
,"Develop the ability to forgive.Forgiveness is something that most people fail miserably at even thought it’s so simple"
,"Be the person that makes others feel special.Be known for your kindness and sympathy."
,"Learn to lucid dream, or to realize when you are dreaming so that you can control your dreams. Sleep feels good, but it’s rather boring and unproductive. With lucid dreaming under your belt, night-time can be even more exciting than when you are awake"
,"Visualize daily. It has been said and proven time and time again that what you focus on is what you get. If you complain all of the time, you will run into more of the things you complain about"
,"Meditate everyday for at least 20 minutes. In this modern world where everyone is so connected to everything else via cell phones, TV and internet, most people rarely enjoy the beauty of silence"
,"Learn to control your mind. What kind of skilled human are you if you cannot even control your own thoughts? While the human mind is described as being a stream of consciousness, that does not mean you can’t decide where your stream flows. Techniques like meditation and the 3 ways to flush out negative thoughts will aid you immensely in learning to control your mind"
,"Learn to control your emotions. The only person that can make you unhappy is you! You are the one that decides to be affected by the words and actions of others. Realize this so that the next time you experience a negative emotion, you can find the strength within yourself to overcome it"
,"Take a class in speed reading. Books are full of information that can enhance your knowledge-base, vocabulary and yourself as a person. Speed reading is an easy way to get at this info faster so that you can have more time for other endeavors"
,"Relax! This one is for you workaholics out there (myself included). Yes, work is very important and productive but you need to take some time to chill out everyday or you are going to burn out faster than a candle with no oxygen"
,"Work on making good first impressions. Practice a strong, firm handshake and the small talk that generally goes along with meeting someone for the first time. People won’t know what to think of you if you have nothing more to say beyond “My name is _______, nice to meet you.” Also make sure you remember names"
,"Learn to use your eyes to their full potential: Make constant eye contact when in conversation. Looking away (especially down) is a sign of inferiority and uncertainty. Instead, look at your conversation partner dead in the eyes and keep them locked on"
,"Be mysterious. Don’t let off everything about you and definitely leave out some major details. There is something both alluring and mesmerizing about someone who no one knows fully about. I’m not saying to confide in no one or to alienate yourself. Just think James Bond."
,"Come up with a life mantra. You know, like “Carpe Diem” or “Live life to the fullest,” but not as cliché. Make it something that really hits home with you so that you will actually stick to it. Make sure it’ not so specific that it rarely applies but also not so general that it’s not personal."
,"Get good at something. Call it a hobby or a passion, whatever it is, just get damn good at it. Your occupation does not count! Make it something that you can practice often enough to excel at. Examples: Magic tricks, surfing, ping-pong, creating short films, and unicycling"
,"Work out those abs. Above any other muscle group in the entire body, the abs are the most important. They constitute your core, the center point of your body. Your ability to balance comes almost completely from the strength of your abdominal muscles and balance is vital to performance in any physical activity. Summary: they’re very important"
,"Keep your brain sharp. The majority of people are stuck in ruts. They go to the same job everyday, hang out with the same friends and eat at the same places. While that may feel safe, it’s not the most stimulating lifestyle for your brain"
,"Read something inspirational right before bed and after waking. This will set get you in a great mood for sleep and for the day. Read anything from a famous speech to your favorite self-improvement book"
," Do what you love. There is a huge difference between making a life and making a living; which one are you making right now? So many spend their entire lives trying to make as much money as possible so that they can afford to do what they really want later"
,"Choose your friends wisely. You are affected far more than you think by the people you spend your time with. Do your friends share your values? Do they encourage you when you speak of your goals and dreams or do they scoff? Make sure the people around you are conducive to the lifestyle you want to lead or you will find yourself being dragged again and again into behavior that distances you from your desires. Friends with a habit of producing negative thoughts will especially hinder you"
,"Don’t burn bridges. By that I mean maintain your relationships with people even if you think you are never going to see them again. For example, if you are quitting your job, don’t chew out your boss before leaving! You might run into him/her again later and life and wish you had never severed ties so harshly"
,"Keep a journal/diary. It sounds like a very monotonous habit at first, but when you get into it, that little book will become a great way to organize your thoughts and track your growth over the years. Most of us already stay awake in bed at night pondering the events of the day anyways so why not document those thoughts in an organized fashion? That will allow you to look back and observe how your way of thinking has changed over time"
,"Read “New Pyscho-Cybernetics” by Dr. Maxwell Maltz. This book will explain why the content of your thoughts has such a profound effect on your life through religious, philosophical and scientific arguments. A must read for completely understand who this life thing works"
,"Learn to use and trust your subconscious/intuition. When you spend time in silence everyday, listen not for words but for a feeling that tells you to do something. Do not mistake your own reasoning and thoughts for those of your subconscious. If you can track where the thought came from, (this thought led to that thought which led to this thought, etc.) then it was not from your subconscious. Learning to accurately discern between the two will allow you to tap into knowledge that you don’t consciously have"
,"Develop a charismatic personality.You know, the kind of personality that is surrounded by people constantly and is the life of the party. Start visualizing yourself as THAT person. Maybe take a short course on dynamic speaking and learn some jokes. Take the time to learn some party tricks and sleight of hand. Most importantly, believe that you already are charismatic even if you fail at being the center point of the next party. Lie to yourself constantly and tell yourself that you are more warm and gregarious than Ronald Regan. Belief is the first step! Reality will come soon after."
,"Love is all there is. If you truly want to be a master of life, let love be in your every action. Love your friends, family and enemies alike. This is the most difficult thing to do out of this entire list"

];
const Subquotes=["Become an explorer and view the world as your jungle. Stop and observe all of the little things as completely unique events. Try new things. Get out of your comfort zone and try to experience as many different environments and sensations as possible. This world has so much to offer, so why not take advantage of it?","Not only will this leave your brain sharp and your memory functioning, you will also have a huge library of quotes to bust out at any moment. Poetry, sayings and philosophies are your best options.","Those who are heavy-set with material desires will have a lot of trouble when their things are taken away from them or lost. Possessions do end up owning you, not the other way around. Become a person of minimal needs and you will be much more content."];
const colors= ['#16a085',
'#27ae60',
'#2c3e50',
'#f39c12',
'#e74c3c',
'#9b59b6',
'#FB6964',
'#342224',
'#472E32',
'#BDBB99',
'#77B1A9',
'#73A857'
,'#001f3f'
,'#FF851B'
,'#FF4136'
,'#85144b'
,'#F012BE'
,'#111111'
,'#AAAAAA'
,'#DDDDDD'
,'#FFDC00'
,'#01FF70'
,'#2ECC40'
,'#3D9970'
,'#39CCCC'
,'#7FDBFF'
,'#7FFF00'
,'#00FFFF'
,'#ADFF2F'
,'#FFD700'
,'#F0E68C'
,'#FFFACD'
,'#F08080'
,'#BA55D3'
,'#3CB371'
,'#FFC0CB'
,'#FFDAB9'
,'#DB7093'
,'#EEE8AA'
,'#FA8072'
,'#008080'
,'#EE82EE'
,'#FF6347'
,'#7FFFD4'
,'#FF4500'
,'#191970'
,'#7B68EE'
,'#7CFC00'
,'#FF69B4'
,'#CD5C5C' ]
class Counter extends React.Component {
  
  constructor(props) {
   
    super(props);
    this.state = {
      
      Header: "",
      Sub:"",
      color:""
      
      
    };

    this.generate = this.generate.bind(this);
  }
  
  generate(event) {
    event.preventDefault();
    let numgenerator= Math.floor(Math.random()*51);
    this.setState({
      Header: Headerquotes[numgenerator]
      , Sub: Subquotes[numgenerator],
      
        color: colors[numgenerator]
    
     
      
      
      
    });
  }
  render() {
    
    return (
    
    
     <div style={{ maxWidth: 5000, top: 50, opacity: 0.8, padding: 400,backgroundColor:this.state.color }}>
      <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
    />
    <div id="wrapper">
      <div id="quote-box">
        <div class="quote-text">
          <i class="fa fa-quote-left"style={{color:this.state.color, opacity:1}}>{this.state.Header}  </i><span id="text"></span>
        </div>
        <div class="quote-author">- <span id="author"></span></div>
        <div class="buttons">
        <a
        class="button"
        id="tweet-quote"
        title="Tweet this quote!"
        target="_top"
        style={{backgroundColor:this.state.color }}
      >
        <i class="fa fa-twitter"></i>
      </a>
      <a
        class="button"
        id="tumblr-quote"
        title="Post this quote on tumblr!"
        target="_blank"
        style={{backgroundColor:this.state.color }}
      >
        <i class="fa fa-tumblr"></i>
      </a>

          <form onSubmit={this.generate} >
          <button class="button" id="new-quote" value={this.state.Header} style={{backgroundColor:this.state.color }}>New quote</button>
          </form>
        
        
          
        </div>
      </div>
      <div class="footer" >by <a href="https://codepen.io/Rexxzar/">Rexxzar</a></div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js"></script>
    </div>
     
    
    );
  }
};

ReactDOM.render(<Counter />, document.getElementById('root'));

reportWebVitals();

