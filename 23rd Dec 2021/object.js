var g_class = {
  'name': "Dec21WebFundamentals",
  'instructor': {
    'name': "Aayush Sinha",
    'subject': "MERN"
  },
  'students': [{
      'name': 'Ujjwal',
      'marks': 80,
    },
    {
      'name': 'Anshul',
      'marks': 89,
    },
    {
      'name': 'Lasya',
      'marks': 77,
    },
    {
      'name': 'Ayush',
      'marks': 70,
    },
    {
     'name': 'Gourav',
     'marks': 90,
    },
    {
     'name': 'Niladri',
     'marks': 85,
    },
    {
     'name': 'Ugrasen',
     'marks': 87,
    }
  ]
};

//console.log(g_class.instructor.name);
//console.log(g_class['instructor']['name']);
var n = g_class.students.length;
n = parseInt(n);
var i = 0;
console.log("Students with marks greater or equal to 85: " );
while(i < n)
{
	if(g_class.students[i].marks >= 85)
	{
		console.log(g_class.students[i].name);
	}
	i++;
}