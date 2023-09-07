let name='haritha';

console.log(name.length);
console.log(name.slice(3,6));
console.log(name.substring(2,8));
console.log(name.substr(4));

let course="python";

console.log(course.replace("python","java"));

console.log(course.toUpperCase);
console.log(course.toLowerCase);
console.log(name.concat(course));


let s="   hello world   ";
console.log(s.trim());

console.log(s.charAt(3));

console.log(s.split('l'));

let text = "Please locate where 'locate' occurs!";

console.log(text.indexOf("locate"));
console.log(text.lastIndexOf('locate'));
console.log(text.search('locate'));
console.log(text.match('lo'));
console.log(text.matchAll("Please"));
console.log(text.includes('locate'));

console.log(text.startsWith('Please'));

console.log(text.endsWith('hello'));