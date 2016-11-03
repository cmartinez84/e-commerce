export default Ember.Helper.helper(function(params) {
  let value = params[0],
      tag = '<i class="fa fa-star lit" aria-hidden="true"}></i>';
      var output = 0;
      var stars ="";
      console.log(params);
      var length = params[0].length;
      params[0].forEach(function(number){
        output += number;
      });
      output /= length;
      // output = Math.ceil(output);
      for(var i = 0; i< output; i++){
        stars += tag;
      }

  return Ember.String.htmlSafe( stars +' <span>'+output.toFixed(2)+' of '+ length + " ratings </span>")});
