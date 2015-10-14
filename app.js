var data = [
  {
    value: 25,
    label: 'Alex',
    color: '#811BD6',
    highlight: '#811B33'
  },
  {
    value: 10,
    label: 'Scott',
    color: '#9CBABA',
    highlight: '#9CBA99'
  },
  {
    value: 30,
    label: 'Emily',
    color: '#D18177',
    highlight: '#D18133'
  },
  {
    value : 35,
    label: 'Bella',
    color: '#6AE128',
    highlight: '#6AE199'
  }
];

var context = document.getElementById('skills').getContext('2d');
var skillsChart = new Chart(context).Doughnut(data, {
    //Number - Amount of animation steps
    animationSteps : 300,
    //String - Animation easing effect
    animationEasing : "easeOutBounce",
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,
    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : true
});
