(function(){var e={7386:function(e,t,s){"use strict";var a=s(3751),n=(s(4114),s(641)),l=s.p+"img/logo2.1eeeee18.png";const r={class:"App"};function i(e,t,s,a,i,o){const c=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)("body",null,[(0,n.Lk)("div",r,[(0,n.Lk)("div",{class:"TopBar",onClick:t[0]||(t[0]=e=>this.$router.push("/"))},t[1]||(t[1]=[(0,n.Lk)("img",{class:"Logo",src:l},null,-1),(0,n.Lk)("h1",null,"PoolLab",-1)])),(0,n.bF)(c),t[2]||(t[2]=(0,n.Lk)("div",{class:"BotBar"},[(0,n.Lk)("h6",null,"©️PoolLab 2025")],-1))])])}var o={name:"App"},c=s(6262);const u=(0,c.A)(o,[["render",i]]);var p=u,m=s(5220),d=s(33);const h={class:"container"},g={class:"wrapper"},k={class:"content"},b={class:"button-group"},v={class:"player-list"},L={class:"player-number"},f=["onUpdate:modelValue","placeholder"],C={key:0,class:"error-message"},T=["disabled"];function y(e,t,s,l,r,i){return(0,n.uX)(),(0,n.CE)("div",h,[(0,n.Lk)("div",g,[(0,n.Lk)("div",k,[t[4]||(t[4]=(0,n.Lk)("h4",null,"Ajoutez des joueurs pour commencer",-1)),(0,n.Lk)("div",b,[(0,n.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>i.addPlayer&&i.addPlayer(...e)),class:"btn btn-add"},"+ Joueur"),(0,n.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>i.removePlayer&&i.removePlayer(...e)),class:"btn btn-remove"},"- Joueur")]),(0,n.Lk)("div",v,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.players,((e,s)=>((0,n.uX)(),(0,n.CE)("div",{key:s,class:"player-item"},[(0,n.Lk)("div",L,(0,d.v_)(s+1),1),(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t=>e.name=t,placeholder:`Joueur ${s+1}`,onInput:t[2]||(t[2]=(...e)=>i.savePlayers&&i.savePlayers(...e)),class:"player-input"},null,40,f),[[a.Jo,e.name]])])))),128))]),r.errorMessage?((0,n.uX)(),(0,n.CE)("p",C,(0,d.v_)(r.errorMessage),1)):(0,n.Q3)("",!0),(0,n.Lk)("button",{onClick:t[3]||(t[3]=(...e)=>i.goToGameList&&i.goToGameList(...e)),disabled:!i.allPlayersNamed,class:"btn btn-navigate"}," Liste des jeux ",8,T)])])])}s(8992),s(3215);var _={name:"HomeMenu",data(){return{players:[],errorMessage:""}},computed:{allPlayersNamed(){return this.players.length>0&&this.players.every((e=>""!==e.name.trim()))}},created(){const e=localStorage.getItem("players");e&&(this.players=JSON.parse(e))},methods:{addPlayer(){this.players.push({name:"",score:0}),this.savePlayers()},removePlayer(){this.players.length>0&&(this.players.pop(),this.savePlayers())},savePlayers(){localStorage.setItem("players",JSON.stringify(this.players)),this.errorMessage=""},goToGameList(){this.allPlayersNamed?this.$router.push("/games"):this.errorMessage="Veuillez remplir tous les noms des joueurs"}}};const P=(0,c.A)(_,[["render",y],["__scopeId","data-v-37e02ab0"]]);var B=P,E=s.p+"img/impact9.e4dec2b5.png",w=s.p+"img/black8jack.4f4dc9cd.png",q=s.p+"img/soon.56cb3cd7.png";const X={class:"gamesListContainer"},I={class:"gamesList"};function x(e,t,s,a,l,r){return(0,n.uX)(),(0,n.CE)("div",X,[t[5]||(t[5]=(0,n.Lk)("h2",null,"Liste des règles de jeux",-1)),(0,n.Lk)("div",I,[(0,n.Lk)("div",{class:"gameMode",onClick:t[0]||(t[0]=e=>this.$router.push("/Impact9Game"))},t[2]||(t[2]=[(0,n.Lk)("img",{class:"gameImage",src:E,alt:"Impact 9"},null,-1),(0,n.Lk)("div",{class:"gameDescription"},[(0,n.Lk)("h3",null,"Impact 9"),(0,n.Lk)("p",null," Rassemblez vos équipes pour une compétition de billard dynamique ! Touchez la boule n°1 en premier pour marquer des points tout en suivant des règles stratégiques. Défendez, attaquez, et dominez pour remporter la partie. ")],-1)])),(0,n.Lk)("div",{class:"gameMode",onClick:t[1]||(t[1]=e=>this.$router.push("/Black8Jack"))},t[3]||(t[3]=[(0,n.Lk)("img",{class:"gameImage",src:w,alt:"Black 8 Jack"},null,-1),(0,n.Lk)("div",{class:"gameDescription"},[(0,n.Lk)("h3",null,"Black 8 Jack"),(0,n.Lk)("p",null," Visez 60 points en accumulant les boules et empochez la boule n°8 pour gagner. Attention à ne pas dépasser ! Stratégie et précision sont essentielles dans ce mode captivant. ")],-1)])),t[4]||(t[4]=(0,n.Lk)("div",{class:"gameMode"},[(0,n.Lk)("img",{class:"gameImage",src:q,alt:"Black 8 Jack"}),(0,n.Lk)("div",{class:"gameDescription"},[(0,n.Lk)("h3",null,"Bientôt disponible ..."),(0,n.Lk)("p",null," de nouvelles règles arrivent bientôt !!! ")])],-1))])])}var S={name:"GamesList"};const F=(0,c.A)(S,[["render",x],["__scopeId","data-v-1f817d2a"]]);var M=F,O=s.p+"img/pile.1e5ad436.png",A=s.p+"img/face.fc461d75.png";const $={class:"impact9Container"},J={key:0,class:"points-selection"},K={class:"slider-container"},R={class:"points-value"},G={key:1,class:"coinContainer"},j={key:2,class:"coinResult"},D={key:3,class:"teams"},Q={key:4,class:"gameContainer"},z={class:"gameInstructions"},H={key:0,class:"balls"},N={class:"whiteBall"},V=["src"],U={class:"butContainer"},W={class:"numberedBalls"},Y=["src","alt","onClick"],Z=["disabled"],ee={key:1,class:"defenderActions"},te={class:"messages"},se={class:"messages-container"},ae={key:2,class:"popup-overlay"},ne={class:"popup-content"},le={class:"winners-list"};function re(e,t,s,l,r,i){return(0,n.uX)(),(0,n.CE)("div",$,[t[22]||(t[22]=(0,n.Lk)("h2",null,"Impact 9",-1)),r.gameStarted||r.pointsSelected?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("div",J,[t[11]||(t[11]=(0,n.Lk)("h3",null,"Sélectionnez le nombre de points pour gagner",-1)),(0,n.Lk)("div",K,[(0,n.bo)((0,n.Lk)("input",{type:"range","onUpdate:modelValue":t[0]||(t[0]=e=>r.maxPoints=e),min:"10",max:"100",step:"5",class:"points-slider"},null,512),[[a.Jo,r.maxPoints]]),(0,n.Lk)("span",R,(0,d.v_)(r.maxPoints)+" points",1)]),(0,n.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>i.confirmPoints&&i.confirmPoints(...e)),class:"btn-start"},"Confirmer")])),r.gameStarted||!r.pointsSelected||r.result?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("div",G,[t[13]||(t[13]=(0,n.Lk)("h3",null,"tirage de l'attaquant",-1)),t[14]||(t[14]=(0,n.Lk)("h3",null,"Lancer la pièce !",-1)),(0,n.Lk)("div",{class:(0,d.C4)(["coin",{flipping:r.isFlipping}]),onClick:t[2]||(t[2]=(...e)=>i.flipCoin&&i.flipCoin(...e))},t[12]||(t[12]=[(0,n.Lk)("div",{class:"face front"},[(0,n.Lk)("img",{class:"piece",src:O})],-1),(0,n.Lk)("div",{class:"face back"},[(0,n.Lk)("img",{class:"piece",src:A})],-1)]),2)])),r.result&&!r.gameStarted?((0,n.uX)(),(0,n.CE)("div",j,[(0,n.Lk)("p",null,(0,d.v_)(r.result)+" commence en tant qu'attaquant !",1),(0,n.Lk)("button",{onClick:t[3]||(t[3]=(...e)=>i.startGame&&i.startGame(...e)),class:"btn-start"},"Commencer")])):(0,n.Q3)("",!0),r.gameStarted?((0,n.uX)(),(0,n.CE)("div",D,[(0,n.Lk)("div",{class:(0,d.C4)(["team",{active:"team1"===i.activeTeam}])},[t[15]||(t[15]=(0,n.Lk)("h3",null,"Équipe 1",-1)),(0,n.Lk)("p",null,"Points : "+(0,d.v_)(r.scores.team1),1),(0,n.Lk)("ul",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.teams.team1,(e=>((0,n.uX)(),(0,n.CE)("li",{key:e.name},(0,d.v_)(e.name),1)))),128))])],2),(0,n.Lk)("div",{class:(0,d.C4)(["team",{active:"team2"===i.activeTeam}])},[t[16]||(t[16]=(0,n.Lk)("h3",null,"Équipe 2",-1)),(0,n.Lk)("p",null,"Points : "+(0,d.v_)(r.scores.team2),1),(0,n.Lk)("ul",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.teams.team2,(e=>((0,n.uX)(),(0,n.CE)("li",{key:e.name},(0,d.v_)(e.name),1)))),128))])],2)])):(0,n.Q3)("",!0),r.gameStarted?((0,n.uX)(),(0,n.CE)("div",Q,[(0,n.Lk)("p",z,(0,d.v_)(i.gameInstruction),1),"attacker"===r.currentRole?((0,n.uX)(),(0,n.CE)("div",H,[(0,n.Lk)("div",N,[(0,n.Lk)("img",{src:i.getImagePath(0),alt:"Balle blanche",class:"ball",onClick:t[4]||(t[4]=(...t)=>e.handleWhiteBall&&e.handleWhiteBall(...t))},null,8,V),(0,n.Lk)("div",U,[(0,n.Lk)("button",{onClick:t[5]||(t[5]=(...e)=>i.noBallTouched&&i.noBallTouched(...e)),class:"btn-none"},"Aucune boule touchée"),(0,n.Lk)("button",{onClick:t[6]||(t[6]=(...e)=>i.noBallEntered&&i.noBallEntered(...e)),class:"btn-none"},"Aucune boule rentrée")])]),(0,n.Lk)("div",W,[((0,n.uX)(),(0,n.CE)(n.FK,null,(0,n.pI)(9,(e=>(0,n.Lk)("img",{key:e,src:i.getImagePath(e),alt:`Boule ${e}`,class:(0,d.C4)(["ball",{selected:r.selectedBalls.includes(e)}]),onClick:t=>i.toggleBallSelection(e)},null,10,Y))),64))]),(0,n.Lk)("button",{onClick:t[7]||(t[7]=(...e)=>i.endAttackerTurn&&i.endAttackerTurn(...e)),class:"btn-end-turn",disabled:0===r.selectedBalls.length}," Terminer le tour ",8,Z)])):"defender"===r.currentRole?((0,n.uX)(),(0,n.CE)("div",ee,[t[17]||(t[17]=(0,n.Lk)("p",null,"Les défenseurs replacent les boules rentrées par les attaquants.",-1)),(0,n.Lk)("button",{onClick:t[8]||(t[8]=(...e)=>i.endDefenderTurn&&i.endDefenderTurn(...e)),class:"btn-end-turn"},"Replacer terminé")])):(0,n.Q3)("",!0),(0,n.Lk)("div",te,[t[18]||(t[18]=(0,n.Lk)("h3",null,"Historique des actions",-1)),(0,n.Lk)("div",se,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.messages,((e,t)=>((0,n.uX)(),(0,n.CE)("div",{key:t,class:"message"},[(0,n.Lk)("p",null,(0,d.v_)(e),1)])))),128))])]),r.showTurnPopup?((0,n.uX)(),(0,n.CE)("div",ae,[(0,n.Lk)("div",ne,[r.winner?((0,n.uX)(),(0,n.CE)(n.FK,{key:0},[t[20]||(t[20]=(0,n.Lk)("h3",null,"Félicitations !",-1)),(0,n.Lk)("p",null,"L'équipe "+(0,d.v_)("team1"===r.winner?"1":"2")+" remporte la partie !",1),(0,n.Lk)("div",le,[t[19]||(t[19]=(0,n.Lk)("p",null,"Les gagnants sont :",-1)),(0,n.Lk)("ul",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.teams[r.winner],(e=>((0,n.uX)(),(0,n.CE)("li",{key:e.name},(0,d.v_)(e.name),1)))),128))])]),(0,n.Lk)("button",{onClick:t[9]||(t[9]=(...e)=>i.goToHome&&i.goToHome(...e)),class:"btn-start"},"OK")],64)):((0,n.uX)(),(0,n.CE)(n.FK,{key:1},[t[21]||(t[21]=(0,n.Lk)("h3",null,"Changement de tour",-1)),(0,n.Lk)("p",null,"C'est au tour de l'équipe "+(0,d.v_)("team1"===r.currentTeam?"1":"2"),1),(0,n.Lk)("button",{onClick:t[10]||(t[10]=(...e)=>i.closeTurnPopup&&i.closeTurnPopup(...e)),class:"btn-start"},"OK")],64))])])):(0,n.Q3)("",!0)])):(0,n.Q3)("",!0)])}s(3949),s(8872);var ie={name:"Impact9Game",data(){return{players:[],teams:{team1:[],team2:[]},isFlipping:!1,result:"",gameStarted:!1,scores:{team1:0,team2:0},currentTeam:null,currentRole:"attacker",attemptsLeft:3,messages:[],selectedBalls:[],showTurnPopup:!1,maxPoints:20,pointsSelected:!1,winner:null}},computed:{gameInstruction(){return"attacker"===this.currentRole?`Équipe ${"team1"===this.currentTeam?"1":"2"} attaque : Vous avez ${this.attemptsLeft} coups restants pour rentrer une boule en touchant la boule 1 en premier.`:"defender"===this.currentRole?`Équipe ${"team1"===this.currentTeam?"2":"1"} défend : Replacer les boules rentrées par l'équipe attaquante.`:"Erreur : rôle ou équipe non défini."},activeTeam(){return"attacker"===this.currentRole?this.currentTeam:"team1"===this.currentTeam?"team2":"team1"}},created(){const e=JSON.parse(localStorage.getItem("players"))||[];this.players=e,this.createTeams()},methods:{confirmPoints(){this.pointsSelected=!0},goToHome(){this.$router.push("/")},getImagePath(e){return s(2259)(`./ball_${e}.png`)},createTeams(){const e=[...this.players].sort((()=>Math.random()-.5)),t=Math.ceil(e.length/2);this.teams.team1=e.slice(0,t),this.teams.team2=e.slice(t)},flipCoin(){this.isFlipping||(this.isFlipping=!0,this.result="",setTimeout((()=>{const e=Math.random()<.5?"Équipe 1":"Équipe 2";this.result=e,this.currentTeam="Équipe 1"===e?"team1":"team2",this.isFlipping=!1,this.addMessage(`${e} commence en tant qu'attaquant.`)}),2e3))},startGame(){this.gameStarted=!0,this.currentRole="attacker"},toggleBallSelection(e){const t=this.selectedBalls.indexOf(e);-1===t?this.selectedBalls.push(e):this.selectedBalls.splice(t,1)},noBallEntered(){this.attemptsLeft--,this.addMessage(`Aucune boule rentrée - ${this.attemptsLeft} coups restants`),this.attemptsLeft<=0&&(this.addMessage("Plus de coups disponibles - Changement d'équipe"),this.currentTeam="team1"===this.currentTeam?"team2":"team1",this.currentRole="attacker",this.attemptsLeft=3,this.selectedBalls=[],this.showTurnPopup=!0)},noBallTouched(){this.addMessage("Aucune boule touchée - Changement d'équipe"),this.currentTeam="team1"===this.currentTeam?"team2":"team1",this.currentRole="attacker",this.attemptsLeft=3,this.selectedBalls=[],this.showTurnPopup=!0},closeTurnPopup(){this.showTurnPopup=!1},endAttackerTurn(){if(this.selectedBalls.length>0){const e=this.selectedBalls.reduce(((e,t)=>e+t),0);if(this.scores[this.currentTeam]+=e,this.selectedBalls.forEach((e=>{this.addMessage(`L'équipe attaquante a rentré la boule ${e}`)})),this.scores[this.currentTeam]>=this.maxPoints)return this.winner=this.currentTeam,void(this.showTurnPopup=!0);this.addMessage("Les défenseurs replacent les boules rentrées."),this.selectedBalls=[],this.switchToDefenderPlacement(),this.showTurnPopup=!0}},switchToDefenderPlacement(){this.currentRole="defender"},endDefenderTurn(){this.addMessage("Les défenseurs ont replacé les boules."),this.restoreAttacker(),this.showTurnPopup=!0},restoreAttacker(){this.addMessage("L'équipe attaquante reprend son tour."),this.currentRole="attacker",this.attemptsLeft=3},addMessage(e){this.messages.push(e)}}};const oe=(0,c.A)(ie,[["render",re],["__scopeId","data-v-796cfe34"]]);var ce=oe;const ue={class:"black8jackContainer"},pe={key:0,class:"coinContainer"},me={key:1,class:"coinResult"},de={class:"butContainer"},he={key:2,class:"gameContainer"},ge={class:"teams"},ke={class:"team-score"},be={class:"currentTurn"},ve={class:"balls"},Le={class:"numberedBalls"},fe=["src","alt","onClick"],Ce=["disabled"],Te={key:3,class:"popup-overlay"},ye={class:"popup-content"};function _e(e,t,s,a,l,r){return(0,n.uX)(),(0,n.CE)("div",ue,[t[10]||(t[10]=(0,n.Lk)("h2",null,"Black8Jack",-1)),l.gameStarted||l.result?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("div",pe,[t[6]||(t[6]=(0,n.Lk)("h3",null,"Déterminer l'équipe qui commence",-1)),t[7]||(t[7]=(0,n.Lk)("h3",null,"Lancer la pièce !",-1)),(0,n.Lk)("div",{class:(0,d.C4)(["coin",{flipping:l.isFlipping}]),onClick:t[0]||(t[0]=(...e)=>r.flipCoin&&r.flipCoin(...e))},t[5]||(t[5]=[(0,n.Lk)("div",{class:"face front"},[(0,n.Lk)("img",{class:"piece",src:O})],-1),(0,n.Lk)("div",{class:"face back"},[(0,n.Lk)("img",{class:"piece",src:A})],-1)]),2)])),l.result&&!l.gameStarted?((0,n.uX)(),(0,n.CE)("div",me,[(0,n.Lk)("p",null,(0,d.v_)(l.result)+" commence le jeu !",1),(0,n.Lk)("div",de,[(0,n.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>r.startGame&&r.startGame(...e)),class:"btn-start"},"Commencer")])])):(0,n.Q3)("",!0),l.gameStarted?((0,n.uX)(),(0,n.CE)("div",he,[(0,n.Lk)("div",ge,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(l.teams,((e,t)=>((0,n.uX)(),(0,n.CE)("div",{key:t,class:(0,d.C4)(["team",{active:l.currentTeam===t}])},[(0,n.Lk)("h3",null,"Équipe "+(0,d.v_)("team1"===t?"1":"2"),1),(0,n.Lk)("ul",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e,(e=>((0,n.uX)(),(0,n.CE)("li",{key:e.name},(0,d.v_)(e.name),1)))),128))]),(0,n.Lk)("p",ke,"Points d'équipe : "+(0,d.v_)(l.scores[t]),1)],2)))),128))]),(0,n.Lk)("p",be," C'est au tour de l'équipe "+(0,d.v_)("team1"===l.currentTeam?"1":"2")+". Rentrer des boules pour accumuler des points ! ",1),(0,n.Lk)("div",ve,[(0,n.Lk)("div",Le,[((0,n.uX)(),(0,n.CE)(n.FK,null,(0,n.pI)(15,(e=>(0,n.Lk)("img",{key:e,src:r.getImagePath(e),alt:`Boule ${e}`,class:(0,d.C4)(["ball",{selected:l.selectedBalls.includes(e),disabled:l.usedBalls.includes(e)}]),onClick:t=>r.toggleBallSelection(e)},null,10,fe))),64))]),(0,n.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>r.endTurn&&r.endTurn(...e)),class:"btn-end-turn",disabled:0===l.selectedBalls.length}," Terminer le tour ",8,Ce)])])):(0,n.Q3)("",!0),l.showTurnPopup?((0,n.uX)(),(0,n.CE)("div",Te,[(0,n.Lk)("div",ye,[l.winner?((0,n.uX)(),(0,n.CE)(n.FK,{key:0},[t[8]||(t[8]=(0,n.Lk)("h3",null,"Félicitations !",-1)),(0,n.Lk)("p",null,"L'équipe "+(0,d.v_)("team1"===l.winner?"1":"2")+" remporte la partie !",1),(0,n.Lk)("button",{onClick:t[3]||(t[3]=(...e)=>r.goToHome&&r.goToHome(...e)),class:"btn-start"},"OK")],64)):((0,n.uX)(),(0,n.CE)(n.FK,{key:1},[t[9]||(t[9]=(0,n.Lk)("h3",null,"Changement de tour",-1)),(0,n.Lk)("p",null,"C'est au tour de l'équipe "+(0,d.v_)("team1"===l.currentTeam?"1":"2"),1),(0,n.Lk)("button",{onClick:t[4]||(t[4]=(...e)=>r.closeTurnPopup&&r.closeTurnPopup(...e)),class:"btn-start"},"OK")],64))])])):(0,n.Q3)("",!0)])}s(4520),s(1454);var Pe={name:"Black8JackGame",data(){return{players:[],teams:{team1:[],team2:[]},isFlipping:!1,result:"",gameStarted:!1,scores:{team1:0,team2:0},currentTeam:null,selectedBalls:[],usedBalls:[],showTurnPopup:!1,maxPoints:60,winner:null}},created(){const e=JSON.parse(localStorage.getItem("players"))||[];this.players=e.map((e=>({name:e.name||e,score:e.score||0}))),this.createTeams()},methods:{goToHome(){this.$router.push("/")},getImagePath(e){return s(2259)(`./ball_${e}.png`)},createTeams(){const e=[...this.players].sort((()=>Math.random()-.5)),t=Math.ceil(e.length/2);this.teams.team1=e.slice(0,t),this.teams.team2=e.slice(t)},flipCoin(){this.isFlipping||(this.isFlipping=!0,setTimeout((()=>{const e=Math.random()<.5?"Équipe 1":"Équipe 2";this.result=e,this.currentTeam="Équipe 1"===e?"team1":"team2",this.isFlipping=!1}),2e3))},startGame(){this.gameStarted=!0},toggleBallSelection(e){if(this.usedBalls.includes(e))return;const t=this.selectedBalls.indexOf(e);-1===t?this.selectedBalls.push(e):this.selectedBalls.splice(t,1)},endTurn(){const e=this.selectedBalls.filter((e=>8!==e)),t=e.reduce(((e,t)=>e+t),0);this.scores[this.currentTeam]+=t;const s=this.selectedBalls.includes(8);if(s){if(this.scores[this.currentTeam]<52)return this.scores[this.currentTeam]=-1,this.winner="team1"===this.currentTeam?"team2":"team1",void(this.showTurnPopup=!0);if(this.scores[this.currentTeam]>=52&&(this.scores[this.currentTeam]+=8,this.scores[this.currentTeam]>=this.maxPoints))return this.winner=this.currentTeam,void(this.showTurnPopup=!0)}if(this.usedBalls.push(...this.selectedBalls),this.scores[this.currentTeam]>=this.maxPoints)return this.winner=this.currentTeam,void(this.showTurnPopup=!0);this.currentTeam="team1"===this.currentTeam?"team2":"team1",this.selectedBalls=[],this.showTurnPopup=!0,this.updateScoreDisplay()},updateScoreDisplay(){console.log(`Score Team 1: ${this.scores.team1}`),console.log(`Score Team 2: ${this.scores.team2}`)},closeTurnPopup(){this.showTurnPopup=!1}}};const Be=(0,c.A)(Pe,[["render",_e],["__scopeId","data-v-566dfd99"]]);var Ee=Be;const we=[{path:"/",name:"Home",component:B},{path:"/games",name:"Games",component:M},{path:"/Impact9Game",name:"Impact9Game",component:ce},{path:"/Black8Jack",name:"Black8Jack",component:Ee}],qe=(0,m.aE)({history:(0,m.LA)("/PoolLab/"),routes:we});var Xe=qe;const Ie=(0,a.Ef)(p);Ie.use(Xe),Ie.mount("#app")},2259:function(e,t,s){var a={"./ball_0.png":2422,"./ball_1.png":1439,"./ball_10.png":6559,"./ball_11.png":3270,"./ball_12.png":3597,"./ball_13.png":9700,"./ball_14.png":3563,"./ball_15.png":8738,"./ball_2.png":2532,"./ball_3.png":3661,"./ball_4.png":7314,"./ball_5.png":8443,"./ball_6.png":8592,"./ball_7.png":5497,"./ball_8.png":6110,"./ball_9.png":5479};function n(e){var t=l(e);return s(t)}function l(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=l,e.exports=n,n.id=2259},2422:function(e,t,s){"use strict";e.exports=s.p+"img/ball_0.693a3b3d.png"},1439:function(e,t,s){"use strict";e.exports=s.p+"img/ball_1.d80d0665.png"},6559:function(e,t,s){"use strict";e.exports=s.p+"img/ball_10.279b7d6a.png"},3270:function(e,t,s){"use strict";e.exports=s.p+"img/ball_11.42d576f4.png"},3597:function(e,t,s){"use strict";e.exports=s.p+"img/ball_12.d72c48ba.png"},9700:function(e,t,s){"use strict";e.exports=s.p+"img/ball_13.ccb7e9bd.png"},3563:function(e,t,s){"use strict";e.exports=s.p+"img/ball_14.787f5dac.png"},8738:function(e,t,s){"use strict";e.exports=s.p+"img/ball_15.9b73b92c.png"},2532:function(e,t,s){"use strict";e.exports=s.p+"img/ball_2.7886f9a5.png"},3661:function(e,t,s){"use strict";e.exports=s.p+"img/ball_3.cefa12ea.png"},7314:function(e,t,s){"use strict";e.exports=s.p+"img/ball_4.218ca528.png"},8443:function(e,t,s){"use strict";e.exports=s.p+"img/ball_5.fc33d500.png"},8592:function(e,t,s){"use strict";e.exports=s.p+"img/ball_6.78f3d573.png"},5497:function(e,t,s){"use strict";e.exports=s.p+"img/ball_7.3255b650.png"},6110:function(e,t,s){"use strict";e.exports=s.p+"img/ball_8.8e897adf.png"},5479:function(e,t,s){"use strict";e.exports=s.p+"img/ball_9.493ae53b.png"}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var l=t[a]={exports:{}};return e[a].call(l.exports,l,l.exports,s),l.exports}s.m=e,function(){var e=[];s.O=function(t,a,n,l){if(!a){var r=1/0;for(u=0;u<e.length;u++){a=e[u][0],n=e[u][1],l=e[u][2];for(var i=!0,o=0;o<a.length;o++)(!1&l||r>=l)&&Object.keys(s.O).every((function(e){return s.O[e](a[o])}))?a.splice(o--,1):(i=!1,l<r&&(r=l));if(i){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[a,n,l]}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.p="/PoolLab/"}(),function(){var e={524:0};s.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,l,r=a[0],i=a[1],o=a[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(n in i)s.o(i,n)&&(s.m[n]=i[n]);if(o)var u=o(s)}for(t&&t(a);c<r.length;c++)l=r[c],s.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return s.O(u)},a=self["webpackChunkpoollab"]=self["webpackChunkpoollab"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[504],(function(){return s(7386)}));a=s.O(a)})();
//# sourceMappingURL=app.a7d26237.js.map