(()=>{"use strict";var e=function(e,t,a,n){var o=this;this.gameDuration=e,this.breakDuration=t,this.numberPlayers=a,this.amountBreaks=n,this.getGameDuration=function(){return o.gameDuration},this.getBreakDuration=function(){return o.breakDuration},this.getNumberPlayers=function(){return o.numberPlayers},this.getAmountBreaks=function(){return o.amountBreaks},this.gameDuration=e,this.breakDuration=t,this.numberPlayers=a,this.amountBreaks=n},t=function(e,t,a){var n=this;this.id=e,this.abbreviation=t,this.logo=a,this.getAbbreviation=function(){return n.abbreviation},this.getId=function(){return n.id},this.getLogo=function(){return n.logo},this.id=e,this.abbreviation=t,this.logo=a},a=function(a,n,o,i,r,s,m){var c=this;this.getGoals=function(){return c.goals},this.getHomeTeam=function(){return c.homeTeam},this.getAwayTeam=function(){return c.awayTeam},this.getGameDuration=function(){return 2*c.sport.getGameDuration()+c.sport.getBreakDuration()},this.getBreakDuration=function(){return c.sport.getGameDuration()+c.sport.getBreakDuration()},this.createGame=function(){document.getElementById("gamesContainer").innerHTML+='\n        <div class="game" id="'.concat(c.gameId,'">\n            <h1 class="teamName">').concat(c.homeTeam.getAbbreviation()," vs ").concat(c.awayTeam.getAbbreviation(),'</h1>    \n            <img class="teamLogo" src="').concat(c.homeTeam.getLogo(),'">\n            <img class="teamLogo" src="').concat(c.awayTeam.getLogo(),'">\n            <div class="outer">\n                <div class="innerScoreBar"></div>\n                <div class="break"></div>\n                <div class="endGame"></div>\n            </div>\n        \n            <div class="scoreCard">\n                <div class="homeTeamScore">0</div>\n                <div class="dash">-</div>\n                <div class="awayTeamScore">0</div>\n            </div>\n        </div>')},this.startGame=function(){var e=document.getElementById(c.gameId).querySelector(" .innerScoreBar");e.style.animationName="playGame",e.style.animationDuration="".concat(c.getGameDuration(),"ms"),e.style.animationFillMode="forwards",e.style.animationTimingFunction="linear"},this.updateGame=function(e){e===c.getBreakDuration()?c.showHalfTime():e===c.getGameDuration()?c.showEndGame():c.goals.forEach((function(t,a){e>=t.videoMS&&(t.teamID===c.homeTeam.getId()?c.incHomeTeamScore(a):t.teamID===c.awayTeam.getId()&&c.incAwayTeamScore(a))}))},this.incHomeTeamScore=function(e){if(!c.goals[e].marked){var t=document.getElementById(c.gameId).querySelector(" .homeTeamScore"),a=parseInt(t.innerHTML)+1;t.innerHTML=a.toString(),c.goals[e].marked=!0}},this.incAwayTeamScore=function(e){if(!c.goals[e].marked){var t=document.getElementById(c.gameId).querySelector(" .awayTeamScore"),a=parseInt(t.innerHTML)+1;t.innerHTML=a.toString(),c.goals[e].marked=!0}},this.showHalfTime=function(){document.getElementById(c.gameId).querySelector(" .outer .break").style.display="block"},this.showEndGame=function(){document.getElementById(c.gameId).querySelector(" .outer .endGame").style.display="block"},this.awayTeam=new t(a,o,"./team-badges/"+o+".png"),this.homeTeam=new t(n,i,"./team-badges/"+i+".png"),this.sport=new e(s,m,11,1),this.goals=r,this.gameId="game"+Date.now().toString(36)+Math.random().toString(36).substring(2)},n=[];window.onload=function(){o(),window.startGames=r};var o=function(){fetch("./football-playout.json").then((function(e){e.json().then((function(e){e.data.forEach((function(t){n.push(new a(t.awayTeamID,t.homeTeamID,t.awayTeamAbbr,t.homeTeamAbbr,t.goals,e.config.msPerGamePeriod,e.config.break))})),i()}))}))},i=function(){for(var e=0;e<n.length;e++)n[e].createGame()},r=function(){for(var e=0,t=n[0].getGameDuration(),a=n[0].getBreakDuration(),o=0;o<n.length;o++)n[o].startGame();var i=setInterval((function(){e===a?e+=1e3:e===t?clearInterval(i):e+=1e3;for(var o=0;o<n.length;o++)n[o].updateGame(e)}),1e3)}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S3pCLE1BQU9rRCxFQUFLTSxPQUFPQyxnQkFBaUJQLEVBQUtNLE9BQU9FLE9BQzNKLElBQ0FDLEdBQ0osR0FDSixHQUNSLEVBRUlBLEVBQVksV0FDWixJQUFLLElBQUlDLEVBQUksRUFBR0EsRUFBSWxCLEVBQU1tQixPQUFRRCxJQUM5QmxCLEVBQU1rQixHQUFHcEQsWUFFakIsRUFFSXNDLEVBQWEsV0FLYixJQUpBLElBQUlnQixFQUFrQixFQUNsQkMsRUFBV3JCLEVBQU0sR0FBR3pELGtCQUNwQitFLEVBQVl0QixFQUFNLEdBQUd4RCxtQkFFaEIwRSxFQUFJLEVBQUdBLEVBQUlsQixFQUFNbUIsT0FBUUQsSUFDOUJsQixFQUFNa0IsR0FBRy9DLFlBR2IsSUFBSW9ELEVBQVlDLGFBQVksV0FDcEJKLElBQW9CRSxFQUNwQkYsR0FBbUIsSUFDWkEsSUFBb0JDLEVBQzNCSSxjQUFjRixHQUVkSCxHQUFtQixJQUd2QixJQUFLLElBQUlGLEVBQUksRUFBR0EsRUFBSWxCLEVBQU1tQixPQUFRRCxJQUM5QmxCLEVBQU1rQixHQUFHeEMsV0FBVzBDLEVBRTVCLEdBQUcsSUFHUCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXNzZXNtZW50LTEvLi9zcmMvc3BvcnQudHMiLCJ3ZWJwYWNrOi8vYXNzZXNtZW50LTEvLi9zcmMvdGVhbS50cyIsIndlYnBhY2s6Ly9hc3Nlc21lbnQtMS8uL3NyYy9zb2NjZXJHYW1lLnRzIiwid2VicGFjazovL2Fzc2VzbWVudC0xLy4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUZWFtfSBmcm9tIFwiLi90ZWFtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3BvcnQge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBnYW1lRHVyYXRpb24/OiBudW1iZXIsIHByaXZhdGUgYnJlYWtEdXJhdGlvbj86IG51bWJlciwgcHJpdmF0ZSBudW1iZXJQbGF5ZXJzPzogbnVtYmVyLCBwcml2YXRlIGFtb3VudEJyZWFrcz86IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZ2FtZUR1cmF0aW9uID0gZ2FtZUR1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMuYnJlYWtEdXJhdGlvbiA9IGJyZWFrRHVyYXRpb247XHJcbiAgICAgICAgdGhpcy5udW1iZXJQbGF5ZXJzID0gbnVtYmVyUGxheWVycztcclxuICAgICAgICB0aGlzLmFtb3VudEJyZWFrcyA9IGFtb3VudEJyZWFrcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRHYW1lRHVyYXRpb24gPSAoKTogbnVtYmVyID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lRHVyYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QnJlYWtEdXJhdGlvbiA9ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJyZWFrRHVyYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TnVtYmVyUGxheWVycyA9ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm51bWJlclBsYXllcnM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QW1vdW50QnJlYWtzID0gKCk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYW1vdW50QnJlYWtzO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCJleHBvcnQgY2xhc3MgVGVhbSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGlkPzogbnVtYmVyLCBwcml2YXRlIGFiYnJldmlhdGlvbj86IHN0cmluZywgcHJpdmF0ZSBsb2dvPzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuYWJicmV2aWF0aW9uID0gYWJicmV2aWF0aW9uO1xyXG4gICAgICAgIHRoaXMubG9nbyA9IGxvZ287XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWJicmV2aWF0aW9uID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWJicmV2aWF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkID0gKCk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG9nbyA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvZ287XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1Nwb3J0fSBmcm9tIFwiLi9zcG9ydFwiO1xyXG5pbXBvcnQge1RlYW19IGZyb20gXCIuL3RlYW1cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTb2NjZXJHYW1lIHtcclxuICAgIHByaXZhdGUgZ2FtZUlkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGF3YXlUZWFtOiBUZWFtO1xyXG4gICAgcHJpdmF0ZSBob21lVGVhbTogVGVhbTtcclxuICAgIHByaXZhdGUgc3BvcnQ6IFNwb3J0O1xyXG4gICAgcHJpdmF0ZSBnb2FsczogQXJyYXk8b2JqZWN0PjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihhd2F5VGVhbUlkPzogbnVtYmVyLCBob21lVGVhbUlkPzogbnVtYmVyLCBhd2F5VGVhbUFiYnI/OiBzdHJpbmcsIGhvbWVUZWFtQWJicj86IHN0cmluZywgZ29hbHM/OiBBcnJheTxvYmplY3Q+LCBnYW1lRHVyYXRpb24/OiBudW1iZXIsIGdhbWVCcmVhaz86IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuYXdheVRlYW0gPSBuZXcgVGVhbShhd2F5VGVhbUlkLCBhd2F5VGVhbUFiYnIsJy4vdGVhbS1iYWRnZXMvJythd2F5VGVhbUFiYnIrJy5wbmcnKTtcclxuICAgICAgICB0aGlzLmhvbWVUZWFtID0gbmV3IFRlYW0oaG9tZVRlYW1JZCwgaG9tZVRlYW1BYmJyLCcuL3RlYW0tYmFkZ2VzLycraG9tZVRlYW1BYmJyKycucG5nJyk7XHJcbiAgICAgICAgdGhpcy5zcG9ydCA9IG5ldyBTcG9ydChnYW1lRHVyYXRpb24sIGdhbWVCcmVhaywgMTEsIDEpO1xyXG4gICAgICAgIHRoaXMuZ29hbHMgPSBnb2FscztcclxuICAgICAgICB0aGlzLmdhbWVJZCA9IFwiZ2FtZVwiICsgRGF0ZS5ub3coKS50b1N0cmluZygzNikgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R29hbHMgPSAoKTogQXJyYXk8T2JqZWN0PiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ29hbHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SG9tZVRlYW0gPSAoKTogVGVhbSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9tZVRlYW07XHJcbiAgICB9XHJcbiAgICBnZXRBd2F5VGVhbSA9ICgpOiBUZWFtID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hd2F5VGVhbTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRHYW1lRHVyYXRpb24gPSAoKTogbnVtYmVyID0+IHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuc3BvcnQuZ2V0R2FtZUR1cmF0aW9uKCkgKiAyKSArIHRoaXMuc3BvcnQuZ2V0QnJlYWtEdXJhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJyZWFrRHVyYXRpb24gPSAoKTogbnVtYmVyID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcG9ydC5nZXRHYW1lRHVyYXRpb24oKSArIHRoaXMuc3BvcnQuZ2V0QnJlYWtEdXJhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUdhbWUgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lc0NvbnRhaW5lclwiKS5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lXCIgaWQ9XCIke3RoaXMuZ2FtZUlkfVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJ0ZWFtTmFtZVwiPiR7dGhpcy5ob21lVGVhbS5nZXRBYmJyZXZpYXRpb24oKX0gdnMgJHt0aGlzLmF3YXlUZWFtLmdldEFiYnJldmlhdGlvbigpfTwvaDE+ICAgIFxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwidGVhbUxvZ29cIiBzcmM9XCIke3RoaXMuaG9tZVRlYW0uZ2V0TG9nbygpfVwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwidGVhbUxvZ29cIiBzcmM9XCIke3RoaXMuYXdheVRlYW0uZ2V0TG9nbygpfVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lclNjb3JlQmFyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnJlYWtcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbmRHYW1lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2NvcmVDYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG9tZVRlYW1TY29yZVwiPjA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXNoXCI+LTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF3YXlUZWFtU2NvcmVcIj4wPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0R2FtZSA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBsZXQgaW5uZXJTY29yZUJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZ2FtZUlkKS5xdWVyeVNlbGVjdG9yKCcgLmlubmVyU2NvcmVCYXInKTtcclxuICAgICAgICBpbm5lclNjb3JlQmFyW1wic3R5bGVcIl0uYW5pbWF0aW9uTmFtZSA9IGBwbGF5R2FtZWA7XHJcbiAgICAgICAgaW5uZXJTY29yZUJhcltcInN0eWxlXCJdLmFuaW1hdGlvbkR1cmF0aW9uID0gYCR7dGhpcy5nZXRHYW1lRHVyYXRpb24oKX1tc2A7XHJcbiAgICAgICAgaW5uZXJTY29yZUJhcltcInN0eWxlXCJdLmFuaW1hdGlvbkZpbGxNb2RlID0gYGZvcndhcmRzYDtcclxuICAgICAgICBpbm5lclNjb3JlQmFyW1wic3R5bGVcIl0uYW5pbWF0aW9uVGltaW5nRnVuY3Rpb24gPSBgbGluZWFyYDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVHYW1lID0gKHJ1bm5pbmdUaW1lcjogbnVtYmVyKTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKHJ1bm5pbmdUaW1lciA9PT0gdGhpcy5nZXRCcmVha0R1cmF0aW9uKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93SGFsZlRpbWUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJ1bm5pbmdUaW1lciA9PT0gdGhpcy5nZXRHYW1lRHVyYXRpb24oKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dFbmRHYW1lKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nb2Fscy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmdUaW1lciA+PSBpdGVtW1widmlkZW9NU1wiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtW1widGVhbUlEXCJdID09PSB0aGlzLmhvbWVUZWFtLmdldElkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmNIb21lVGVhbVNjb3JlKGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW1bXCJ0ZWFtSURcIl0gPT09IHRoaXMuYXdheVRlYW0uZ2V0SWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluY0F3YXlUZWFtU2NvcmUoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5jSG9tZVRlYW1TY29yZSA9IChpbmRleDogbnVtYmVyKTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmdvYWxzW2luZGV4XVtcIm1hcmtlZFwiXSkge1xyXG4gICAgICAgICAgICBsZXQgaG9tZVRlYW1TY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZ2FtZUlkKS5xdWVyeVNlbGVjdG9yKCcgLmhvbWVUZWFtU2NvcmUnKTtcclxuICAgICAgICAgICAgbGV0IHNjb3JlID0gcGFyc2VJbnQoaG9tZVRlYW1TY29yZS5pbm5lckhUTUwpICsgMTtcclxuICAgICAgICAgICAgaG9tZVRlYW1TY29yZS5pbm5lckhUTUwgPSBzY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmdvYWxzW2luZGV4XVtcIm1hcmtlZFwiXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluY0F3YXlUZWFtU2NvcmUgPSAoaW5kZXg6IG51bWJlcik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5nb2Fsc1tpbmRleF1bXCJtYXJrZWRcIl0pIHtcclxuICAgICAgICAgICAgbGV0IGF3YXlUZWFtU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmdhbWVJZCkucXVlcnlTZWxlY3RvcignIC5hd2F5VGVhbVNjb3JlJyk7XHJcbiAgICAgICAgICAgIGxldCBzY29yZSA9IHBhcnNlSW50KGF3YXlUZWFtU2NvcmUuaW5uZXJIVE1MKSArIDE7XHJcbiAgICAgICAgICAgIGF3YXlUZWFtU2NvcmUuaW5uZXJIVE1MID0gc2NvcmUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5nb2Fsc1tpbmRleF1bXCJtYXJrZWRcIl0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93SGFsZlRpbWUgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5nYW1lSWQpLnF1ZXJ5U2VsZWN0b3IoJyAub3V0ZXIgLmJyZWFrJylbJ3N0eWxlJ10uZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RW5kR2FtZSA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZ2FtZUlkKS5xdWVyeVNlbGVjdG9yKCcgLm91dGVyIC5lbmRHYW1lJylbJ3N0eWxlJ10uZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH1cclxufSIsImltcG9ydCB7U29jY2VyR2FtZX0gZnJvbSBcIi4vc29jY2VyR2FtZVwiO1xyXG5cclxubGV0IGdhbWVzOiBBcnJheTxTb2NjZXJHYW1lPiA9IFtdO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGdldERhdGEoKTtcclxuICAgIHdpbmRvd1tcInN0YXJ0R2FtZXNcIl0gPSBzdGFydEdhbWVzO1xyXG59O1xyXG5cclxubGV0IGdldERhdGEgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBmZXRjaCgnLi9mb290YmFsbC1wbGF5b3V0Lmpzb24nKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihqc29uID0+IHtcclxuICAgICAgICAgICAgICAgIGpzb24uZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVzLnB1c2gobmV3IFNvY2NlckdhbWUoaXRlbS5hd2F5VGVhbUlELCBpdGVtLmhvbWVUZWFtSUQsIGl0ZW0uYXdheVRlYW1BYmJyLCBpdGVtLmhvbWVUZWFtQWJiciwgaXRlbS5nb2FscywganNvbi5jb25maWcubXNQZXJHYW1lUGVyaW9kLCBqc29uLmNvbmZpZy5icmVhaykpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBkcmF3R2FtZXMoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxufVxyXG5cclxubGV0IGRyYXdHYW1lcyA9ICgpOiB2b2lkID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBnYW1lc1tpXS5jcmVhdGVHYW1lKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBzdGFydEdhbWVzID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgbGV0IHJ1bm5pbmdEdXJhdGlvbiA9IDA7XHJcbiAgICBsZXQgZ2FtZVRpbWUgPSBnYW1lc1swXS5nZXRHYW1lRHVyYXRpb24oKTtcclxuICAgIGxldCBicmVha1RpbWUgPSBnYW1lc1swXS5nZXRCcmVha0R1cmF0aW9uKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGdhbWVzW2ldLnN0YXJ0R2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBnYW1lVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJ1bm5pbmdEdXJhdGlvbiA9PT0gYnJlYWtUaW1lKSB7XHJcbiAgICAgICAgICAgIHJ1bm5pbmdEdXJhdGlvbiArPSAxMDAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocnVubmluZ0R1cmF0aW9uID09PSBnYW1lVGltZSkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGdhbWVUaW1lcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcnVubmluZ0R1cmF0aW9uICs9IDEwMDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGdhbWVzW2ldLnVwZGF0ZUdhbWUocnVubmluZ0R1cmF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9LCAxMDAwKTtcclxuXHJcblxyXG59Il0sIm5hbWVzIjpbImdhbWVEdXJhdGlvbiIsImJyZWFrRHVyYXRpb24iLCJudW1iZXJQbGF5ZXJzIiwiYW1vdW50QnJlYWtzIiwiZ2V0R2FtZUR1cmF0aW9uIiwiZ2V0QnJlYWtEdXJhdGlvbiIsImdldE51bWJlclBsYXllcnMiLCJnZXRBbW91bnRCcmVha3MiLCJ0aGlzIiwiaWQiLCJhYmJyZXZpYXRpb24iLCJsb2dvIiwiZ2V0QWJicmV2aWF0aW9uIiwiZ2V0SWQiLCJnZXRMb2dvIiwiYXdheVRlYW1JZCIsImhvbWVUZWFtSWQiLCJhd2F5VGVhbUFiYnIiLCJob21lVGVhbUFiYnIiLCJnb2FscyIsImdhbWVCcmVhayIsImdldEdvYWxzIiwiZ2V0SG9tZVRlYW0iLCJob21lVGVhbSIsImdldEF3YXlUZWFtIiwiYXdheVRlYW0iLCJzcG9ydCIsImNyZWF0ZUdhbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiZ2FtZUlkIiwic3RhcnRHYW1lIiwiaW5uZXJTY29yZUJhciIsInF1ZXJ5U2VsZWN0b3IiLCJhbmltYXRpb25OYW1lIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJhbmltYXRpb25GaWxsTW9kZSIsImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uIiwidXBkYXRlR2FtZSIsInJ1bm5pbmdUaW1lciIsInNob3dIYWxmVGltZSIsInNob3dFbmRHYW1lIiwiZm9yRWFjaCIsIml0ZW0iLCJpbmRleCIsImluY0hvbWVUZWFtU2NvcmUiLCJpbmNBd2F5VGVhbVNjb3JlIiwiaG9tZVRlYW1TY29yZSIsInNjb3JlIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsImF3YXlUZWFtU2NvcmUiLCJkaXNwbGF5IiwiVGVhbSIsIlNwb3J0IiwiRGF0ZSIsIm5vdyIsIk1hdGgiLCJyYW5kb20iLCJzdWJzdHJpbmciLCJnYW1lcyIsIndpbmRvdyIsIm9ubG9hZCIsImdldERhdGEiLCJzdGFydEdhbWVzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInB1c2giLCJTb2NjZXJHYW1lIiwiYXdheVRlYW1JRCIsImhvbWVUZWFtSUQiLCJjb25maWciLCJtc1BlckdhbWVQZXJpb2QiLCJicmVhayIsImRyYXdHYW1lcyIsImkiLCJsZW5ndGgiLCJydW5uaW5nRHVyYXRpb24iLCJnYW1lVGltZSIsImJyZWFrVGltZSIsImdhbWVUaW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=