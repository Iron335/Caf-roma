let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let  readingEl=document.getElementById("reading")
let quizEl=document.getElementById("quiz")
let infoBox=document.getElementById("info-box");


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
/*
document.addEventListener("contextmenu",function(freelanceNasim){
       freelanceNasim.preventDefault();
   });
*/
function showreading(){
       document.getElementById("info-box").style.display="none";
       document.getElementById("reading").style.display="inline";

}
function questioner(){
       readingEl.innerHTML= `
    <form name="quiz" id="quiz">
    <ul>
    <div id="class">1. Where did the old Man Lived?
           <li><input type="radio" name="questional" value="Village">A.Village</li>
           <li><input type="radio" name="questional" value="City">B.City</li>
           <li><input type="radio" name="questional" value="Town">C.Town</li>
           <li><input type="radio" name="questional" value="province">D.province</li>
     </div>
    <div id="class">2. What was the mood of the old man?
            <li> <input type="radio" name="questiona2" value="Happy">A.Happy</li>
            <li> <input type="radio" name="questiona2" value="Sad">B.Sad</li>
            <li><input type="radio" name="questiona2" value="Angry">C.Angry</li>
            <li><input type="radio" name="questiona2" value="Gloomy">D.Gloomy</li>
       </div>        
    <div id="class">3. Why did the people aviod the old man?
           <li><input type="radio" name="questiona3" value="Because His Lucky">A.Because hi Lucky</li>
           <li><input type="radio" name="questiona3" value="Because His Misfortune  was Contagious">B.Because His Misfortune  was Contagious </li>
           <li><input type="radio" name="questiona3" value="Because Hi Was Contagious">C.Because hi was Contagious</li>
           <li><input type="radio" name="questiona3" value="Because hi was unhappy">D.Because hi was unhappy</li>
       </div>        
    <div id="class">4. What did the people ask about the man?
           <li><input type="radio" name="questiona4" value="What Happened To You">A.What Happened To You</li>
           <li><input type="radio" name="questiona4" value="Where have you been">B.Where have you been</li>
           <li><input type="radio" name="questiona4" value="Are you alrigh">C.Are you alright</li>
           <li><input type="radio" name="questiona4" value="How are you doing">D.How are you doing</li>
</div>
    <div id="class">5.What is the Moral of the Story
           <li><input type="radio" name="questiona5" value="Chase Happiness. Enjoy Your Life">A.Chase Happiness. Enjoy Your Life</li>
           <li><input type="radio" name="questiona5" value="Enjoy Your Life">B. Enjoy Your Life</li>
           <li><input type="radio" name="questiona5" value="Don't Chase Happiness. Enjoy Your Life">C.Don't Chase Happiness. Enjoy Your Life</li>
           <li><input type="radio" name="questiona5" value="Happiness">D.Happiness</li>
        </ul>
        </div>
        </br></br>
       <button id="ready" onclick=" check()">Done </button>
       
    `
}
function check(){
    var c=0;
    var q1=document.quiz.questional.value;
    var q2=document.quiz.questiona2.value;
    var q3=document.quiz.questiona3.value;
    var q4=document.quiz.questiona4.value;
    var q5=document.quiz.questiona5.value;
    if (q1=="Village") {c++}
    if (q2=="Gloomy") {c++}
    if (q3=="Because His Misfortune  was Contagious") {c++}
    if (q4=="What Happened To You") {c++}
    if (q5=="Don't Chase Happiness. Enjoy Your Life") {c++}
    quiz.innerHTML = `
    <div class="result">
           <h2>You answered ${c} questions correctly</h2>

           <a href="index.html" class="Home">Done</a> 
    </div>
           `


}
function questioner1(){
       readingEl.innerHTML= `
       <form name="quiz1" id="quiz1">
       <ul>
       <div id="class">1.What was the name of the cow? 
       <li> <input type="radio" name="questiona1" value="Magic.">A.  Magic</li>
       <li> <input type="radio" name="questiona1" value="Bessie">B.  Bessie</li>
       <li><input type="radio" name="questiona1" value="Buttercup">C.  Buttercup</li>
       <li><input type="radio" name="questiona1" value="Bessy">D.  Bessy</li>
       </div>
       <div id="class">2.What was the shape of the castle ?
              <li> <input type="radio" name="questiona2" value="Rectangular Castle">A.  Rectangular Castle</li>
              <li> <input type="radio" name="questiona2" value="Triangle Castle">B.  Triangle Castle</li>
              <li><input type="radio" name="questiona2" value="Square Castle">C.  Square Castle</li>
              <li><input type="radio" name="questiona2" value="Circular Castle">D.  Circular Castle</li>
       </div>          
      <div id="class">3.What did jack trade in old milking cow for?
             <li><input type="radio" name="questiona3" value="Magical Beans">A.  Magical Beans</li>
             <li><input type="radio" name="questiona3" value="A new clothes">B.  A new clothes</li>
             <li><input type="radio" name="questiona3" value="A new Toy">C. A new Toy</li>
             <li><input type="radio" name="questiona3" value=" Magical Seeds">D. Magical Seeds</li>
       </div>          
      <div id="class">4.what did the giant want to do with jack?
             <li><input type="radio" name="questiona4" value="Catch him and make him sing">A.Catch him and make him sing </li>
             <li><input type="radio" name="questiona4" value="Play with Him">B. Play with Him</li>
             <li><input type="radio" name="questiona4" value="Feed him a Nice, Big Breakfast">C.Feed him a Nice, Big Breakfast</li>
             <li><input type="radio" name="questiona4" value="Broiled On Toast and Grind  His Bones ">D. Broiled On Toast and Grind  His Bones </li>
       </div>
      <div id="class">5. What did jack do with the Golden Eggs
             <li><input type="radio" name="questiona5" value="Hi bought back Old Bessy">A.Hi bought back Old Bessy,</li>
             <li><input type="radio" name="questiona5" value="Hi bought another magical beans">B. Hi bought another magical beans</li>
             <li><input type="radio" name="questiona5" value="Hi went in town to give everyone holding eggs">C.Hi went in town to give everyone holding eggs</li>
             <li><input type="radio" name="questiona5" value="Hi use the golden eggs to buy a new house">D.Hi use the golden eggs to buy a new house</li>
       </div
       ></ul>
       </br></br>
       <button id="ready" onclick="check1()">Done </button>
       `
}
function check1(){
       var c=0;
       var q1=document.quiz1.questiona1.value;
       var q2=document.quiz1.questiona2.value;
       var q3=document.quiz1.questiona3.value;
       var q4=document.quiz1.questiona4.value;
       var q5=document.quiz1.questiona5.value;
       if (q1=="Bessy") {c++}
       if (q2=="Square Castle") {c++}
       if (q3=="Magical Beans") {c++}
       if (q4=="Broiled On Toast and Grind  His Bones ") {c++}
       if (q5=="Hi bought back Old Bessy") {c++}
       quiz1.innerHTML = `
       <h2>You answered ${c} questions correctly</h2>
   
       <a href="index.html" class="Home">Done</a>
       `
   
} 
function Part2(){
       readingEl.innerHTML=`
       <p> 
       Part II 
       </br></br> 
In the brightness of the wintry sun next morning as it streamed over the breakfast table he laughed at his fears. There was an air of prosaic wholesomeness about the room which it had lacked on the previous night, and the dirty, shriveled little paw was pitched on the side-board with a carelessness which betokened no great belief in its virtues. 
</br></br> 
"I suppose all old soldiers are the same," said Mrs White. "The idea of our listening to such nonsense! How could wishes be granted in these days? And if they could, how could two hundred pounds hurt you, father?" 
</br></br> 
"Might drop on his head from the sky," said the frivolous Herbert. 
</br></br> 
"Morris said the things happened so naturally," said his father, "that you might if you so wished attribute it to coincidence." 
</br></br> 
"Well don't break into the money before I come back," said Herbert as he rose from the table. "I'm afraid it'll turn you into a mean, avaricious man, and we shall have to disown you." 
</br></br> 
His mother laughed, and following him to the door, watched him down the road; and returning to the breakfast table, was very happy at the expense of her husband's credulity. All of which did not prevent her from scurrying to the door at the postman's knock, nor prevent her from referring somewhat shortly to retired Sergeant-Majors of bibulous habits when she found that the post brought a tailor's bill. 
</br></br> 
"Herbert will have some more of his funny remarks, I expect, when he comes home," she said as they sat at dinner. 
</br></br> 
"I dare say," said Mr. White, pouring himself out some beer; "but for all that, the thing moved in my hand; that I'll swear to." 
</br></br> 
"You thought it did," said the old lady soothingly. 
</br></br> 
"I say it did," replied the other. "There was no thought about it; I had just - What's the matter?" 
</br></br> 
His wife made no reply. She was watching the mysterious movements of a man outside, who, peering in an undecided fashion at the house, appeared to be trying to make up his mind to enter. In mental connexion with the two hundred pounds, she noticed that the stranger was well dressed, and wore a silk hat of glossy newness. Three times he paused at the gate, and then walked on again. The fourth time he stood with his hand upon it, and then with sudden resolution flung it open and walked up the path. Mrs White at the same moment placed her hands behind her, and hurriedly unfastening the strings of her apron, put that useful article of apparel beneath the cushion of her chair. 
</br></br> 
She brought the stranger, who seemed ill at ease, into the room. He gazed at her furtively, and listened in a preoccupied fashion as the old lady apologized for the appearance of the room, and her husband's coat, a garment which he usually reserved for the garden. She then waited as patiently as her sex would permit for him to broach his business, but he was at first strangely silent. 
</br></br> 
"I - was asked to call," he said at last, and stooped and picked a piece of cotton from his trousers. "I come from 'Maw and Meggins.' " 
</br></br> 
The old lady started. "Is anything the matter?" she asked breathlessly. "Has anything happened to Herbert? What is it? What is it? 
</br></br> 
Her husband interposed. "There there mother," he said hastily. "Sit down, and don't jump to conclusions. You've not brought bad news, I'm sure sir," and eyed the other wistfully. 
</br></br> 
"I'm sorry - " began the visitor. 
</br></br> 
"Is he hurt?" demanded the mother wildly. 
</br></br> 
The visitor bowed in assent."Badly hurt," he said quietly, "but he is not in any pain." 
</br></br> 
"Oh thank God!" said the old woman, clasping her hands. "Thank God for that! Thank - " 
</br></br> 
She broke off as the sinister meaning of the assurance dawned on her and she saw the awful confirmation of her fears in the others averted face. She caught her breath, and turning to her slower-witted husband, laid her trembling hand on his. There was a long silence. 
</br></br> 
"He was caught in the machinery," said the visitor at length in a low voice. 
</br></br> 
"Caught in the machinery," repeated Mr. White, in a dazed fashion,"yes." 
</br></br> 
He sat staring out the window, and taking his wife's hand between his own, pressed it as he had been wont to do in their old courting days nearly forty years before. 
</br></br> 
"He was the only one left to us," he said, turning gently to the visitor. "It is hard." 
</br></br> 
The other coughed, and rising, walked slowly to the window. " The firm wishes me to convey their sincere sympathy with you in your great loss," he said, without looking round. "I beg that you will understand I am only their servant and merely obeying orders." 
</br></br> 
There was no reply; the old woman’s face was white, her eyes staring, and her breath inaudible; on the husband's face was a look such as his friend the sergeant might have carried into his first action. 
</br></br> 
"I was to say that Maw and Meggins disclaim all responsibility," continued the other. "They admit no liability at all, but in consideration of your son's services, they wish to present you with a certain sum as compensation." 
</br></br> 
Mr. White dropped his wife's hand, and rising to his feet, gazed with a look of horror at his visitor. His dry lips shaped the words, "How much?" 
</br></br> 
"Two hundred pounds," was the answer. 
</br></br> 
Unconscious of his wife's shriek, the old man smiled faintly, put out his hands like a sightless man, and dropped, a senseless heap, to the floor.
       </p>
       </br></br> 
       <button onclick="Part3()" id="ready">Next</button>
       `
}
function Part3(){
  readingEl.innerHTML=`
  <p>
  Part III 
  </br></br> 

In the huge new cemetery, some two miles distant, the old people buried their dead, and came back to the house steeped in shadows and silence. It was all over so quickly that at first they could hardly realize it, and remained in a state of expectation as though of something else to happen - something else which was to lighten this load, too heavy for old hearts to bear. 
</br></br> 
But the days passed, and expectations gave way to resignation - the hopeless resignation of the old, sometimes mis-called apathy. Sometimes they hardly exchanged a word, for now they had nothing to talk about, and their days were long to weariness. 
</br></br> 
It was about a week after that the old man, waking suddenly in the night, stretched out his hand and found himself alone. The room was in darkness, and the sound of subdued weeping came from the window. He raised himself in bed and listened. 
</br></br> 
"Come back," he said tenderly. "You will be cold." 
</br></br> 
"It is colder for my son," said the old woman, and wept afresh. 
</br></br> 
The sounds of her sobs died away on his ears. The bed was warm, and his eyes heavy with sleep. He dozed fitfully, and then slept until a sudden wild cry from his wife awoke him with a start. 
</br></br> 
"THE PAW!" she cried wildly. "THE MONKEY'S PAW!" 
</br></br> 
He started up in alarm. "Where? Where is it? What’s the matter?" 
</br></br> 
She came stumbling across the room toward him. "I want it," she said quietly. "You've not destroyed it?" 
</br></br> 
"It's in the parlour, on the bracket," he replied, marveling. "Why?" 
</br></br> 
She cried and laughed together, and bending over, kissed his cheek. 
</br></br> 
"I only just thought of it," she said hysterically. "Why didn't I think of it before? Why didn't you think of it?" 
</br></br> 
"Think of what?" he questioned. 
</br></br> 
"The other two wishes," she replied rapidly. "We've only had one." 
</br></br> 
"Was not that enough?" he demanded fiercely. 
</br></br> 
"No," she cried triumphantly; "We'll have one more. Go down and get it quickly, and wish our boy alive again." 
</br></br> 
The man sat in bed and flung the bedclothes from his quaking limbs."Good God, you are mad!" he cried aghast. "Get it," she panted; "get it quickly, and wish - Oh my boy, my boy!" 
</br></br> 
Her husband struck a match and lit the candle. "Get back to bed he said unsteadily. "You don't know what you are saying." 
</br></br> 
"We had the first wish granted," said the old woman, feverishly; "why not the second?" 
</br></br> 
"A coincidence," stammered the old man. 
</br></br> 
"Go get it and wish," cried his wife, quivering with excitement. 
</br></br> 
The old man turned and regarded her, and his voice shook. "He has been dead ten days, and besides he - I would not tell you else, but - I could only recognize him by his clothing. If he was too terrible for you to see then, how now?" 
</br></br> 
"Bring him back," cried the old woman, and dragged him towards the door. "Do you think I fear the child I have nursed?" 
</br></br> 
He went down in the darkness, and felt his way to the parlour, and then to the mantlepiece. The talisman was in its place, and a horrible fear that the unspoken wish might bring his mutilated son before him ere he could escape from the room seized up on him, and he caught his breath as he found that he had lost the direction of the door. His brow cold with sweat, he felt his way round the table, and groped along the wall until he found himself in the small passage with the unwholesome thing in his hand. 
</br></br> 
Even his wife's face seemed changed as he entered the room. It was white and expectant, and to his fears seemed to have an unnatural look upon it. He was afraid of her. 
</br></br> 
"WISH!" she cried in a strong voice. 
</br></br> 
"It is foolish and wicked," he faltered. 
</br></br> 
"WISH!" repeated his wife. 
</br></br> 
He raised his hand. "I wish my son alive again." 
</br></br> 
The talisman fell to the floor, and he regarded it fearfully. Then he sank trembling into a chair as the old woman, with burning eyes, walked to the window and raised the blind. 
</br></br> 
He sat until he was chilled with the cold, glancing occasionally at the figure of the old woman peering through the window. The candle-end, which had burned below the rim of the china candlestick, was throwing pulsating shadows on the ceiling and walls, until with a flicker larger than the rest, it expired. The old man, with an unspeakable sense of relief at the failure of the talisman, crept back back to his bed, and a minute afterward the old woman came silently and apathetically beside him. 
</br></br> 
Neither spoke, but sat silently listening to the ticking of the clock. A stair creaked, and a squeaky mouse scurried noisily through the wall. The darkness was oppressive, and after lying for some time screwing up his courage, he took the box of matches, and striking one, went downstairs for a candle. 
</br></br> 
At the foot of the stairs the match went out, and he paused to strike another; and at the same moment a knock came so quiet and stealthy as to be scarcely audible, sounded on the front door. 
</br></br> 
The matches fell from his hand and spilled in the passage. He stood motionless, his breath suspended until the knock was repeated. Then he turned and fled swiftly back to his room, and closed the door behind him. A third knock sounded through the house. 
</br></br> 
"WHAT’S THAT?" cried the old woman, starting up. 
</br></br> 
"A rat," said the old man in shaking tones - "a rat. It passed me on the stairs." 
</br></br> 
His wife sat up in bed listening. A loud knock resounded through the house. 
</br></br> 
"It's Herbert!" 
</br></br> 
She ran to the door, but her husband was before her, and catching her by the arm, held her tightly. 
</br></br> 
"What are you going to do?" he whispered hoarsely. 
</br></br> 
"It's my boy; it's Herbert!" she cried, struggling mechanically. "I forgot it was two miles away. What are you holding me for? Let go. I must open the door." 
</br></br> 
"For God's sake don't let it in," cried the old man, trembling. 
</br></br> 
"You're afraid of your own son," she cried struggling. "Let me go. I'm coming, Herbert; I'm coming." 
</br></br> 
There was another knock, and another. The old woman with a sudden wrench broke free and ran from the room. Her husband followed to the landing, and called after her appealingly as she hurried downstairs. He heard the chain rattle back and the bolt drawn slowly and stiffly from the socket. Then the old woman’s voice, strained and panting. 
</br></br> 
"The bolt," she cried loudly. "Come down. I can't reach it." 
</br></br> 
But her husband was on his hands and knees groping wildly on the floor in search of the paw. If only he could find it before the thing outside got in. A perfect fusillade of knocks reverberated through the house, and he heard the scraping of a chair as his wife put it down in the passage against the door. He heard the creaking of the bolt as it came slowly back, and at the same moment he found the monkey's paw, and frantically breathed his third and last wish. 
</br></br> 
The knocking ceased suddenly, although the echoes of it were still in the house. He heard the chair drawn back, and the door opened. A cold wind rushed up the staircase, and a long loud wail of disappointment and misery from his wife gave him the courage to run down to her side, and then to the gate beyond. The street lamp flickering opposite shone on a quiet and deserted road. 
  </p>
  <button onclick="questioner2()" id="ready">Next</button>
  `
}
function questioner2(){
       readingEl.innerHTML= `
       <form name="quiz2" id="quiz2">
       <ul>
       <div id="class">1.How does the setting at the beginning set the mood for the story? 
       <li> <input type="radio" name="questiona1" value="Helps set a depressing mood.">A.Helps set a depressing mood.</li>
       <li> <input type="radio" name="questiona1" value="Helps set a happy, smelling-flowers mood">B.Helps set a happy, smelling-flowers mood.</li>
       <li><input type="radio" name="questiona1" value="Helps set a sombre, mysterious mood">C.Helps set a sombre, mysterious mood</li>
       <li><input type="radio" name="questiona1" value="What is mood?">D.What is mood?</li>
       </div>
       <div id="class">2.Which event in "The Monkey's Paw" signals the resolution of the story?
              <li> <input type="radio" name="questiona2" value="Sergeant Major Morris visits the Whites.">A.Sergeant Major Morris visits the Whites.</li>
              <li> <input type="radio" name="questiona2" value="Mr. White searches for the monkey's paw to make a third wish.">B.Mr. White searches for the monkey's paw to make a third wish.</li>
              <li><input type="radio" name="questiona2" value="Mr. White makes his second wish on the paw.">C.Mr. White makes his second wish on the paw.</li>
              <li><input type="radio" name="questiona2" value="There was no one at the door when Mr. White looks out.">D.There was no one at the door when Mr. White looks out.</li>
        </div>          
      <div id="class">3.Using inference, why did Sgt. Morris decide not to sell the paw?
             <li><input type="radio" name="questiona3" value="He wanted to keep all the wishes for himself.">A.He wanted to keep all the wishes for himself.</li>
             <li><input type="radio" name="questiona3" value="The paw was a gift from his great-grandfather.">B.The paw was a gift from his great-grandfather.</li>
             <li><input type="radio" name="questiona3" value="If he sold the paw, he'd be cursed.s">C.If he sold the paw, he'd be cursed.</li>
             <li><input type="radio" name="questiona3" value="The paw was evil.">D.The paw was evil.</li>
       </div>          
      <div id="class">4. What was special about the paw?
             <li><input type="radio" name="questiona4" value="The paw granted unlimited wishes">A.The paw granted unlimited wishes</li>
             <li><input type="radio" name="questiona4" value="The paw was a valuable artifact.">B.The paw was a valuable artifact.</li>
             <li><input type="radio" name="questiona4" value="The paw granted 3 wishes.">C.The paw granted 3 wishes.</li>
             <li><input type="radio" name="questiona4" value="The paw belonged to a famous king.">D.The paw belonged to a famous king.</li>
       </div>
      <div id="class">5.What mood do you find in the story when the Whites stop speaking to one another after Herbert's death?
             <li><input type="radio" name="questiona5" value="hopeless grief">A.hopeless grief</li>
             <li><input type="radio" name="questiona5" value="hurtful anger">B.hurtful anger </li>
             <li><input type="radio" name="questiona5" value="quiet thought">C.quiet thought</li>
             <li><input type="radio" name="questiona5" value="silent blame">D.silent blame</li>
       </div>
       </ul>
       </br></br>
       <button id="ready" onclick="check2()">Done </button>
       `
}
function check2(){
       var c=0;
       var q1=document.quiz2.questiona1.value;
       var q2=document.quiz2.questiona2.value;
       var q3=document.quiz2.questiona3.value;
       var q4=document.quiz2.questiona4.value;
       var q5=document.quiz2.questiona5.value;
       if (q1=="Helps set a sombre, mysterious mood") {c++}
       if (q2=="There was no one at the door when Mr. White looks out.") {c++}
       if (q3=="The paw was evil.") {c++}
       if (q4=="The paw granted 3 wishes.") {c++}
       if (q5=="silent blame") {c++}
       quiz2.innerHTML = `
              <h2>You answered ${c} questions correctly</h2>
   
              <a href="index.html" class="Home">Done</a>
              `
   
   
}
function questioner3(){
       readingEl.innerHTML= `
       <form name="quiz3" id="quiz3">
       <ul>
       <div id="class">1.Ilan ang anak ni Haring Fernando? 
       <li> <input type="radio" name="questiona1" value="1">A.1</li>
       <li> <input type="radio" name="questiona1" value="3">B.3</li>
       <li><input type="radio" name="questiona1" value="2">C.2</li>
       <li><input type="radio" name="questiona1" value="4">D.4</li>
       </div>
       <div id="class">2.Saang bundok daw matatagpuan ang ibong adarna? 
              <li> <input type="radio" name="questiona2" value="Makiling">A.Makiling</li>
              <li> <input type="radio" name="questiona2" value="Apo">B.Apo</li>
              <li><input type="radio" name="questiona2" value="Arayat">C.Arayat</li>
              <li><input type="radio" name="questiona2" value="Tabor">D.Tabor</li>
       </div>          
      <div id="class">3.Ano ang pangalan ng kaharian?
             <li><input type="radio" name="questiona3" value="Albania">A.Albania</li>
             <li><input type="radio" name="questiona3" value="Encantadia">B.Encantadia</li>
             <li><input type="radio" name="questiona3" value="Berbanya">C.Berbanya</li>
             <li><input type="radio" name="questiona3" value="Hatoria">D.Hatoria</li>
       </div>          
      <div id="class">4.Sino ang panganay sa magkakapatid?
             <li><input type="radio" name="questiona4" value="Don Pedro">A.Don Pedro</li>
             <li><input type="radio" name="questiona4" value="Don Juan">B.Don Juan</li>
             <li><input type="radio" name="questiona4" value="Don Diego">C.Don Diego</li>
             <li><input type="radio" name="questiona4" value="Don Tiago">D.Don Tiago</li>
       </div>
      <div id="class">5.Sino ang nagtagumpay na kunin ang ibon?
             <li><input type="radio" name="questiona5" value="Don Pedro">A.Don Pedro</li>
             <li><input type="radio" name="questiona5" value="Don Juan">B.Don Juan </li>
             <li><input type="radio" name="questiona5" value="Don Diego">C.Don Diego</li>
             <li><input type="radio" name="questiona5" value="Don Tiago">D.Don Tiago</li>
       </div> 
       </ul>
       </br></br>
       <button id="ready" onclick="check3()">Done </button>
       `
}
function check3(){
       var c=0;
       var q1=document.quiz3.questiona1.value;
       var q2=document.quiz3.questiona2.value;
       var q3=document.quiz3.questiona3.value;
       var q4=document.quiz3.questiona4.value;
       var q5=document.quiz3.questiona5.value;
       if (q1=="3") {c++}
       if (q2=="Tabor") {c++}
       if (q3=="Berbanya") {c++}
       if (q4=="Don Pedro") {c++}
       if (q5=="Don Juan") {c++}
       quiz3.innerHTML = `
       <h2>You answered ${c} questions correctly</h2>
          
       <a href="index.html" class="Home">Done</a>
              `
          
} 
function questioner4(){
readingEl.innerHTML= `
       <form name="quiz4" id="quiz4">
       <ul>
       <div id="class">1.The children stopped their games to? 
       <li> <input type="radio" name="questiona1" value="look at the beauty">A.look at the beauty</li>
       <li> <input type="radio" name="questiona1" value=" Rat fruit in the garden">B. Eat fruit in the garden</li>
       <li><input type="radio" name="questiona1" value="pick beautiful flowers">C.pick beautiful flowers</li>
       <li><input type="radio" name="questiona1" value=" listen to the birds">D. listen to the birds</li>
       </div>
       <div id="class">2.The Giant was angry when he saw? 
              <li> <input type="radio" name="questiona2" value="the wall broken">A.the wall broken</li>
              <li> <input type="radio" name="questiona2" value=" the trees fallen">B. the trees fallen</li>
              <li><input type="radio" name="questiona2" value="the children playing">C.the children playing</li>
              <li><input type="radio" name="questiona2" value="the birds singing">D.the birds singing</li>
       </div>          
      <div id="class">3.The Giant thought that the children in his garden were?
             <li><input type="radio" name="questiona3" value="playful">A.playful</li>
             <li><input type="radio" name="questiona3" value="dirty">B.dirty</li>
             <li><input type="radio" name="questiona3" value="beautiful">C.beautiful</li>
             <li><input type="radio" name="questiona3" value="trespassers">D.trespassers</li>
       </div>          
      <div id="class">4.He was selfish because he thought that his garden?
             <li><input type="radio" name="questiona4" value="was a rare beauty">A.was a rare beauty</li>
             <li><input type="radio" name="questiona4" value=" was for him only">B. was for him only</li>
             <li><input type="radio" name="questiona4" value=" was not for spring">C. was not for spring</li>
             <li><input type="radio" name="questiona4" value="for the little boy">D.for the little boy</li>
       </div>
      <div id="class">5.The Nature was unhappy with the giant because?
             <li><input type="radio" name="questiona5" value="he would not allow the children">A.he would not allow the children</li>
             <li><input type="radio" name="questiona5" value="he would not water the plants properly to play">B.he would not water the plants properly to play </li>
             <li><input type="radio" name="questiona5" value="he was very cruel">C.he was very cruel</li>
             <li><input type="radio" name="questiona5" value="he loved cold and frost">D.he loved cold and frost</li>
       </div> 
       </ul>
       </br></br>
<button id="ready" onclick="check4()">Done </button> `
}
function check4(){
       var c=0;
       var q1=document.quiz4.questiona1.value;
       var q2=document.quiz4.questiona2.value;
       var q3=document.quiz4.questiona3.value;
       var q4=document.quiz4.questiona4.value;
       var q5=document.quiz4.questiona5.value;
       if (q1=="listen to the birds") {c++}
       if (q2=="the children playing") {c++}
       if (q3=="trespassers") {c++}
       if (q4=="was for him only") {c++}
       if (q5=="he would not allow the children") {c++}
       quiz4.innerHTML = `
       <div class="result">
       <h2>You answered ${c} questions correctly</h2>

       <a href="index.html" class="Home">Done</a> 
       </div>
              `
          
} 