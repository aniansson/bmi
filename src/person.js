function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;


  Person.prototype.calculate_bmi = function() {
     calculator = new BMICalculator();

     if('option is Metric') {
       calculator.metric_bmi(this);
     }
     calculator.imperial_bmi(this);
  };
};
