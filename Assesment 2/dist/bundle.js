(()=>{window.onload=function(){t()};var t=function(){fetch("./scene-manager.json").then((function(t){t.json().then((function(t){"object"==typeof t?t.hasOwnProperty("children")?document.getElementById("outputDiv").innerHTML+='<ul id="treeRoot"><li>\n                <i class="fa-solid fa-angle-right caretIcon"></i><div class="panel">'.concat(e(t,!0),"</ul>"):document.getElementById("outputDiv").innerHTML+='<ul id="treeRoot"><li>\n                <i class="fa-solid fa-angle-right caretIcon"></i><div class="panel">'.concat(e(t,!1),"</li></ul>"):document.getElementById("outputDiv").innerHTML+='<ul id="treeRoot">'.concat(e(t,!1),"</ul>");var n,c=document.getElementsByClassName("panel");for(n=0;n<c.length;n++)c[n].addEventListener("click",(function(){this.parentElement.querySelector(".nested").classList.toggle("active"),this.parentElement.querySelector(" .caretIcon").classList.toggle("caretDown")}))}))}))},e=function(t,n){var c="";for(var a in t)Array.isArray(t[a])?c+='</div><ul class="nested">'.concat(e(t[a],!1),"</ul>"):"object"==typeof t[a]?t[a].hasOwnProperty("children")?c+='<li><i class="fa-solid fa-angle-right caretIcon"></i><div class="panel">'.concat(e(t[a],!0),"</div></li>"):c+="<li>".concat(e(t[a],!1),"</li>"):c+=n?"type"===a?"".concat(t[a]):"id"===a?"#".concat(t[a],"<br>"):"".concat(a,": ").concat(t[a],"<br>"):"<li>".concat(a,": ").concat(t[a],"</li>");return c}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJNQUFBQSxPQUFPQyxPQUFTLFdBQ1pDLEdBQ0osRUFJQSxJQUFJQSxFQUFZLFdBQ1pDLE1BQU0sd0JBQ0RDLE1BQUssU0FBQ0MsR0FDSEEsRUFBU0MsT0FBT0YsTUFBSyxTQUFBRSxHQUNLLGlCQUFYLEVBQ0hBLEVBQUtDLGVBQWUsWUFDcEJDLFNBQVNDLGVBQWUsYUFBYUMsV0FBYSxzSEFDWUMsRUFBU0wsR0FBTSxHQUFLLFNBRWxGRSxTQUFTQyxlQUFlLGFBQWFDLFdBQWEsc0hBQ1lDLEVBQVNMLEdBQU0sR0FBTSxjQUd2RkUsU0FBU0MsZUFBZSxhQUFhQyxXQUFhLDRCQUFxQkMsRUFBU0wsR0FBSyxHQUFNLFNBSS9GLElBQ0lNLEVBREFDLEVBQVVMLFNBQVNNLHVCQUF1QixTQUc5QyxJQUFLRixFQUFJLEVBQUdBLEVBQUlDLEVBQVFFLE9BQVFILElBQzVCQyxFQUFRRCxHQUFHSSxpQkFBaUIsU0FBUyxXQUNqQ0MsS0FBS0MsY0FBY0MsY0FBYyxXQUFXQyxVQUFVQyxPQUFPLFVBQzdESixLQUFLQyxjQUFjQyxjQUFjLGVBQWVDLFVBQVVDLE9BQU8sWUFDckUsR0FFUixHQUNKLEdBQ1IsRUFRSVYsRUFBVyxTQUFDVyxFQUFhQyxHQUN6QixJQUFJQyxFQUFRLEdBQ1osSUFBSyxJQUFJQyxLQUFRSCxFQUNUSSxNQUFNQyxRQUFRTCxFQUFJRyxJQUNsQkQsR0FBUyxtQ0FBNEJiLEVBQVNXLEVBQUlHLElBQU8sR0FBTSxTQUNqQyxpQkFBZkgsRUFBSUcsR0FDZkgsRUFBSUcsR0FBTWxCLGVBQWUsWUFDekJpQixHQUFTLGtGQUEyRWIsRUFBU1csRUFBSUcsSUFBTyxHQUFLLGVBRTdHRCxHQUFTLGNBQU9iLEVBQVNXLEVBQUlHLElBQU8sR0FBTSxTQUt0Q0QsR0FGSkQsRUFDYSxTQUFURSxFQUNTLFVBQUdILEVBQUlHLElBQ0EsT0FBVEEsRUFDRSxXQUFJSCxFQUFJRyxHQUFLLFFBRWIsVUFBR0EsRUFBSSxhQUFLSCxFQUFJRyxHQUFLLFFBR3pCLGNBQU9BLEVBQUksYUFBS0gsRUFBSUcsR0FBSyxTQUk5QyxPQUFPRCxDQUNYLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3Nlc21lbnQtMi8uL3NyYy9zY3JpcHQudHMiXSwic291cmNlc0NvbnRlbnQiOlsid2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGZldGNoRGF0YSgpO1xyXG59O1xyXG4vKipcclxuICogZmV0Y2hEYXRhIGZ1bmN0aW9uIHRvIGZldGNoIGpzb24gb2JqZWN0IGZyb20gYXBpXHJcbiAqL1xyXG5sZXQgZmV0Y2hEYXRhID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgZmV0Y2goJy4vc2NlbmUtbWFuYWdlci5qc29uJylcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oanNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChqc29uKSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChqc29uLmhhc093blByb3BlcnR5KCdjaGlsZHJlbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0RGl2XCIpLmlubmVySFRNTCArPSBgPHVsIGlkPVwidHJlZVJvb3RcIj48bGk+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWFuZ2xlLXJpZ2h0IGNhcmV0SWNvblwiPjwvaT48ZGl2IGNsYXNzPVwicGFuZWxcIj4ke3RyYXZlcnNlKGpzb24sIHRydWUpfTwvdWw+YFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0RGl2XCIpLmlubmVySFRNTCArPSBgPHVsIGlkPVwidHJlZVJvb3RcIj48bGk+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWFuZ2xlLXJpZ2h0IGNhcmV0SWNvblwiPjwvaT48ZGl2IGNsYXNzPVwicGFuZWxcIj4ke3RyYXZlcnNlKGpzb24sIGZhbHNlKX08L2xpPjwvdWw+YFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXREaXZcIikuaW5uZXJIVE1MICs9IGA8dWwgaWQ9XCJ0cmVlUm9vdFwiPiR7dHJhdmVyc2UoanNvbixmYWxzZSl9PC91bD5gXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQXNzaWduIGV2ZW50IGxpc3RlbmVycyB0byBkcm9wZG93bnNcclxuICAgICAgICAgICAgICAgIHZhciB0b2dnbGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBhbmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRvZ2dsZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVyW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm5lc3RlZFwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiAuY2FyZXRJY29uXCIpLmNsYXNzTGlzdC50b2dnbGUoJ2NhcmV0RG93bicpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiB0cmF2ZXJzZSByZWN1cnNpdmUgZnVuY3Rpb24gdG8gdHJhdmVyc2UgYW4gb2JqZWN0XHJcbiAqIHBhcmFtcyB7b2JqfSB0aGUgb2JqZWN0IHRoYXQgbmVlZHMgdG8gYmUgdHJhdmVyc2VkXHJcbiAqIHBhcmFtcyB7aXNDaGlsZH0gaWYgdGhlIGN1cnJlbnQgaXRlbSBoYXMga2V5IGNoaWxkcmVuIGFzIGNoaWxkXHJcbiAqIEByZXR1cm5zIFN0cmluZyBidWlsZCAtIHRoZSBidWlsdCBzdHJpbmdcclxuICovXHJcbmxldCB0cmF2ZXJzZSA9IChvYmo6IE9iamVjdCwgaXNDaGlsZDpib29sZWFuKTogc3RyaW5nID0+IHtcclxuICAgIGxldCBidWlsZCA9IGBgO1xyXG4gICAgZm9yIChsZXQgaXRlbSBpbiBvYmopIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmpbaXRlbV0pKSB7XHJcbiAgICAgICAgICAgIGJ1aWxkICs9IGA8L2Rpdj48dWwgY2xhc3M9XCJuZXN0ZWRcIj4ke3RyYXZlcnNlKG9ialtpdGVtXSwgZmFsc2UpfTwvdWw+YDtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiAob2JqW2l0ZW1dKSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBpZiAob2JqW2l0ZW1dLmhhc093blByb3BlcnR5KCdjaGlsZHJlbicpKSB7XHJcbiAgICAgICAgICAgICAgICBidWlsZCArPSBgPGxpPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtYW5nbGUtcmlnaHQgY2FyZXRJY29uXCI+PC9pPjxkaXYgY2xhc3M9XCJwYW5lbFwiPiR7dHJhdmVyc2Uob2JqW2l0ZW1dLCB0cnVlKX08L2Rpdj48L2xpPmA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidWlsZCArPSBgPGxpPiR7dHJhdmVyc2Uob2JqW2l0ZW1dLCBmYWxzZSl9PC9saT5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGlzQ2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtID09PSBcInR5cGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1aWxkICs9IGAke29ialtpdGVtXX1gO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtID09PSBcImlkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBidWlsZCArPSBgIyR7b2JqW2l0ZW1dfTxicj5gO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBidWlsZCArPSBgJHtpdGVtfTogJHtvYmpbaXRlbV19PGJyPmA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidWlsZCArPSBgPGxpPiR7aXRlbX06ICR7b2JqW2l0ZW1dfTwvbGk+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBidWlsZDtcclxufSJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJmZXRjaERhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJoYXNPd25Qcm9wZXJ0eSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJ0cmF2ZXJzZSIsImkiLCJ0b2dnbGVyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0aGlzIiwicGFyZW50RWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJvYmoiLCJpc0NoaWxkIiwiYnVpbGQiLCJpdGVtIiwiQXJyYXkiLCJpc0FycmF5Il0sInNvdXJjZVJvb3QiOiIifQ==