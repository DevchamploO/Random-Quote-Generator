var myArray = ["Fear comes from uncertainty; we can eliminate the fear within us when we know ourselves better.@Bruce Lee","There is nothing outside of yourself that can ever enable you to get better, stronger, richer, quicker, or smarter. Everything is within. Everything exists. Seek nothing outside of yourself.@Miyamoto Musashi","Imagination will often carry us to worlds that never were. But without it we go nowhere.@Carl Sagan","Some are born great, some achieve greatness, and some have greatness thrust upon them.@William Shakespeare","After climbing a great hill, one only finds that there are many more hills to climb.@Nelson Mandela","If you cannot do great things, do small things in a great way.@Napolean Hill","It is a rough road that leads to the heights of greatness.@Lucius Annaeus Seneca","Always stay gracious, best revenge is your paper.@Beyonce","You don't have to be great to start, but you have to start to be great.@Zig Ziglar","We can complain because rose bushes have thorns, or rejoice because thorn bushes have roses.@Abraham Lincoln","When you talk you are only repeating what you know. But if you listen, you may learn something new.@Dalai Lama","No one is you and that is your power.@Dave Grohl","Try not. Do or do not. There is no try.@Master Yoda","Fail with honor rather than succeed by fraud.@Gungan General","You can run but you'll only die tired.@Boba Fett","Hoes want attention. Women want respect.@Drake","Kill them with success and bury them with a smile.@Drake","Stars can't shine without darkness.@Unknown","Everything you want is on the otherside of fear.@Jack Canfield"];

function generate () {          
  
  var rand = myArray[Math.floor(Math.random()*myArray.length)];
  
  var toSplit = rand.split('@'),
  a = toSplit[0],
  b = toSplit[1];
 
  document.getElementById("quote").innerHTML = a;
  document.getElementById("cite").innerHTML = b;
};

