/* Regular Expressions: Find Characters with Lazy Matching
In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.

You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, ends with i, and has some letters in between.

Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string possible to fit the pattern.

However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].

Note
Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine.

Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character. */

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; 
// '.' pega todos, '*' todas as patterns que ocorrem 0 ou mais vezes, e '?' exclui todas essas possibilidades, o retorno vai ser tudo que está envolvido por '< >'
let result = text.match(myRegex);


console.log(result);
