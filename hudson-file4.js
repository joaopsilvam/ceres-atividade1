function integrate(f, a, b){
   const h = (b - a) * 1e-5;//cost fixed
   let sum = 0;
   let sum2 = 0;
   for(let i = 1; a + h * i < b; i++){
      if(i % 2 == 0)
      	 sum += f(a + i*h);
      else
         sum2 += f(a + i*h);
   }
   return (sum2*4 + sum*2 + f(a) + f(b)) * h / 3;
}