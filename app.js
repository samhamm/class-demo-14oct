var data = [
  {
    value: 25,
    label: 'Alex the Scottish Sensation',
    color: '#811BD6',
    highlight: '#811B33'
  },
  {
    value: 5,
    label: 'Scott the Alexish Aberration',
    color: '#9CBABA',
    highlight: '#9CBA99'
  },
  {
    value: 40,
    label: 'Emily the Extraordinarily Ectoplasmic',
    color: '#D18177',
    highlight: '#D18133'
  },
  {
    value : 45,
    label: 'Bella Bella Bella!!!',
    color: '#6AE128',
    highlight: '#6AE199'
  }
];

var context = document.getElementById('skills').getContext('2d');
var skillsChart = new Chart(context).Doughnut(data, {
    //Number - Amount of animation steps
    animationSteps : 200,
    //String - Animation easing effect
    animationEasing : "easeOutBounce",
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,
    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : true
});
