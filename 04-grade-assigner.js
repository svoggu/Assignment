let inPut = prompt("What is your score?" );
if (inPut <= 100 && inPut >= 90) {
    alert('Your grade is A');
} else if (inPut <= 89 && inPut >= 80) {
    alert('Your grade is B')
} else if (inPut <= 79 && inPut >= 70) {
    alert('Your grade is C')
} else if (inPut <= 69 && inPut >= 60) {
    alert('Your grade is D')
} else if (inPut <= 60 && inPut >= 0) {
    alert('Your grade is F')
} else(
    alert('Only numbers between 1 and 100 are accepted')
);