var whatBrowser = {
  // Opera 8.0+
  isOpera : function(){ return((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;);}

  // Firefox 1.0+
  isFirefox : function(){ return(typeof InstallTrigger !== 'undefined';);}

  // Safari 3.0+ "[object HTMLElementConstructor]" 
  isSafari : function(){return(/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)););}

  // Internet Explorer 6-11
  isIE : function(){return(/*@cc_on!@*/false || !!document.documentMode;);}

  // Edge 20+
  isEdge : function(){return( !isIE && !!window.StyleMedia; );}

  // Chrome 1+
  isChrome : function(){return( !!window.chrome; );}

  // Blink engine detection
  isBlink : function(){return((isChrome || isOpera) && !!window.CSS;);}

  debug : function() {
    console.log("Opera - " + this.isOpera());
    console.log("Firefox - " + this.isFirefox());
    console.log("Safari - " + this.isSafari());
    console.log("IE - " + this.isIE());
    console.log("Edge - " + this.isEdge());
    console.log("Chrome - " + this.isChrome());
    console.log("Blink - " + this.isBlink());
  }
}
