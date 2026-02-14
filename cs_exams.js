
const exams = {

"admasu":[


  {
    "q": "The software developer team must be given more emphasize which types of software quality requirements?",
    "options": ["Flexibility", "Reliability", "Modifiability", "Maintainability"],
    "answer": 1,
    "explanation": "Reliability is a critical quality requirement to ensure software works correctly under specified conditions."
  },
  {
    "q": "What types of software process model is using more fit with the system requirement?",
    "options": ["Agile model", "Spiral model", "Rational Unified Process Model", "Waterfall model"],
    "answer": 0,
    "explanation": "Agile model is more flexible and adapts well to changing system requirements."
  },
  {
    "q": "What types of requirement asked by Ethiopian Airline Company Administrator?",
    "options": ["Quality requirement", "Functional requirement", "Pseudo requirement", "Analysis requirement"],
    "answer": 0,
    "explanation": "Specifying the implementation language is considered a quality or constraint requirement."
  },
  {
    "q": "Assume you are project manager, what is your decision?",
    "options": [
      "Accept the software development team idea and the system will be implementing by java.",
      "Discuss with both Ethiopian airline administrator and software developer team to select common software programing language. If does not agree, the system development stop at early stage.",
      "Decide to stop system development automatically.",
      "According to software engineering rule, the software developer team idea has more acceptance than clients. Therefore, the system will be implementing by java."
    ],
    "answer": 1,
    "explanation": "A project manager should facilitate discussion and reach agreement between stakeholders."
  },
  {
    "q": "Which one of the following false about UML object model can be mapped to relational database during software design phase?",
    "options": [
      "Each class is mapped to its own table",
      "Each class attribute is mapped to a column in the table",
      "Each class method is mapped to a relationship in the table",
      "An instance of a class represents a row in the table"
    ],
    "answer": 2,
    "explanation": "Methods are not mapped to database tables; only attributes and relationships are."
  },
  {
    "q": "What types of problem have been between the two nonfunctional requirement statements?",
    "options": ["Consistency", "Completeness", "Traceability", "Realism"],
    "answer": 0,
    "explanation": "The maintenance time conflicts with continuous operation, creating inconsistency."
  },
  {
    "q": "What is the correct HTML for creating a hyperlink?",
    "options": [
      "<a>http://www.google.com</a>",
      "<a name='http://www.google.com'>Google.com</a>",
      "<a href='http://www.google.com'>Google</a>",
      "<a url='http://www.google.com'>Google.com</a>"
    ],
    "answer": 2,
    "explanation": "The correct syntax uses the href attribute."
  },
  {
    "q": "How can you open a link in a new tab/browser window?",
    "options": [
      "<a href='url' target='_blank'>",
      "<a href='url' new>",
      "<a href='url' target='new'>",
      "<a href='url'>new tab</a>"
    ],
    "answer": 0,
    "explanation": "The target='_blank' attribute opens a link in a new tab."
  },
  {
    "q": "In html, which attribute is used to specify that an input field must be filled out?",
    "options": ["formvalidate", "required", "validate", "placeholder"],
    "answer": 1,
    "explanation": "The required attribute enforces mandatory input."
  },
  {
    "q": "What is the correct HTML for inserting an image?",
    "options": [
      "<img alt='MyImage'>image.gif</img>",
      "<imghref='image.gif' alt='MyImage'>",
      "<image src='image.gif' alt='MyImage'>",
      "<img src='image.gif' alt='MyImage'>"
    ],
    "answer": 3,
    "explanation": "Images are inserted using the img tag with src attribute."
  },

  {
    "q": "_____ is a metalanguage used to define new markup languages.",
    "options": ["PHP", "HTML", "XML", "JavaScript"],
    "answer": 2,
    "explanation": "XML is used to define custom markup languages."
  },
  {
    "q": "_____ are the software programs people use to consume the web?",
    "options": ["Languages", "Browsers", "HTTP", "Web Servers"],
    "answer": 1,
    "explanation": "Browsers allow users to access web content."
  },
  {
    "q": "How do you create a cookie in PHP?",
    "options": ["setcookie()", "createcookie", "makecookie", "addcookie"],
    "answer": 0,
    "explanation": "setcookie() function is used in PHP."
  },
  {
    "q": "How do you create an array in PHP?",
    "options": [
      "$cars = 'Volvo', 'BMW','Toyota';",
      "$cars[3] = 'Volvo','BMW','Toyota';",
      "$cars = array('Volvo','BMW','Toyota');",
      "$cars = array['Volvo','BMW','Toyota'];"
    ],
    "answer": 2,
    "explanation": "PHP arrays are created using array() function."
  },
  {
    "q": "What is MySQL?",
    "options": [
      "A relational database management system",
      "Cross-platform, open-source and free",
      "Developed, distributed, and supported by Oracle Corporation",
      "All"
    ],
    "answer": 3,
    "explanation": "All statements about MySQL are correct."
  },
  {
    "q": "Which statement is false?",
    "options": [
      "When using the POST method, variables are displayed in the URL.",
      "PHP can generate dynamic page content.",
      "The if statement is used to execute some code only if a specified condition is true.",
      "PHP scripts are executed on the server."
    ],
    "answer": 0,
    "explanation": "POST method does not display variables in the URL."
  },

  {
    "q": "Schema normalization is not for?",
    "options": [
      "Reducing the number of tables in the schema.",
      "Eliminating uncontrolled redundancy of data.",
      "Eliminating anomalies with inserts.",
      "Eliminating anomalies with deletes."
    ],
    "answer": 0,
    "explanation": "Normalization may increase number of tables."
  },

  {
    "q": "Which one of the following statements is used to create a table?",
    "options": [
      "CREATE TABLE table_name (column_name column_type);",
      "CREATE table_name (column_type column_name);",
      "CREATE table_name (column_name column_type);",
      "CREATE TABLE table_name (column_type column_name);"
    ],
    "answer": 0,
    "explanation": "Correct SQL syntax uses CREATE TABLE."
  },

  {
    "q": "What is the difference between Generalization and Specialization?",
    "options": [
      "Generalization and Specialization is like the Top-Down Approach",
      "Generalization and Specialization is like the Bottom-Up Approach",
      "Generalization is like Bottom-Up and Specialization is like Top-Down",
      "Generalization is Top-Down and Specialization is Bottom-Up"
    ],
    "answer": 2,
    "explanation": "Generalization is bottom-up while specialization is top-down."
  },

  {
    "q": "A database language that provides commands for granting privileges is called?",
    "options": ["Transaction Control Language", "Data Control Language", "Data Manipulation Language", "Data Definition Language"],
    "answer": 1,
    "explanation": "DCL controls access permissions."
  },

  {
    "q": "A rule assigned to a column preventing invalid data is called?",
    "options": ["Keys", "Constraint", "Tuple", "Attribute"],
    "answer": 1,
    "explanation": "Constraints enforce data rules."
  },

  {
    "q": "Which one is not Functions of SQL?",
    "options": [
      "Execute and retrieve queries",
      "Insert and update records",
      "Create stored procedures and views",
      "All of the above"
    ],
    "answer": 3,
    "explanation": "All listed are SQL functions, so 'All of the above' makes question false."
  },

  {
    "q": "_____ is a set of one or more attributes to uniquely identify a record?",
    "options": ["Candidate key", "Super key", "Primary key", "Foreign key"],
    "answer": 1,
    "explanation": "Super key uniquely identifies tuples."
  },

  {
    "q": "Which is an example of object based logical model?",
    "options": ["Entity Relationship Model", "Hierarchical Model", "Relational Model", "Network Model"],
    "answer": 0,
    "explanation": "ER model is object-based."
  },

  {
    "q": "Which refers to number of attributes in a relation?",
    "options": ["Cardinality", "Degree", "Row", "Domain"],
    "answer": 1,
    "explanation": "Degree is number of attributes."
  },

  {
    "q": "Which of the following is odd?",
    "options": ["Locking", "Time Stamping", "Optimistic", "All of the Above"],
    "answer": 3,
    "explanation": "All are concurrency control techniques."
  },

  {
    "q": "Which level of security concerns authorization of database users?",
    "options": ["Application level", "Human level", "Physical level", "Database system"],
    "answer": 3,
    "explanation": "Authorization is handled by DBMS."
  },

  {
    "q": "Mechanism enforcing limits on access with multiple threads?",
    "options": ["Timestamping", "Concurrency control", "Transaction", "Locking"],
    "answer": 3,
    "explanation": "Locking controls access to shared resources."
  },

  {
    "q": "Good program design failed if program cannot adapt across computers?",
    "options": ["Reliability", "Efficiency", "Maintainability", "Portability"],
    "answer": 3,
    "explanation": "Portability is ability to run on multiple systems."
  },

  {
    "q": "Which one is incorrect about algorithm?",
    "options": [
      "Set of instructions to solve problem",
      "Steps dependent on programming language",
      "Efficient in time and memory",
      "Produces expected output"
    ],
    "answer": 1,
    "explanation": "Algorithms are language independent."
  },
  {
    "q": "Which one of the following should include under every C++ program?",
    "options": ["int", "double", "main()", "length()"],
    "answer": 2,
    "explanation": "Every C++ program must contain a main() function as the entry point."
  },
  {
    "q": "A symbolic name for memory location in which data can be stored and subsequently recalled is called______.",
    "options": ["Keyword", "Literals", "Variable", "Reserved words"],
    "answer": 2,
    "explanation": "A variable is a symbolic name representing a memory location."
  },
  {
    "q": "Which one of the following statements provides a way of choosing between a set of alternatives based on the value of an expression?",
    "options": ["if statement", "if…else statement", "switch statement", "while statement"],
    "answer": 2,
    "explanation": "The switch statement allows selection among multiple alternatives based on an expression value."
  },
  {
    "q": "Among the following which one is used to execute block of code known times?",
    "options": ["For loop", "While loop", "Do…while loop", "Switch"],
    "answer": 0,
    "explanation": "A for loop is typically used when the number of iterations is known."
  },
  {
    "q": "Which one of the following is false about abstract classes?",
    "options": [
      "Abstract classes are declared using the keyword abstract.",
      "An abstract class can be a superclass.",
      "An abstract class can also be a final class.",
      "An object of an abstract class cannot be created."
    ],
    "answer": 2,
    "explanation": "An abstract class cannot be final because final prevents inheritance."
  },
  {
    "q": "Which one of the following is true about interfaces?",
    "options": [
      "An interface’s methods are by default public and final.",
      "An interfaces variable is by default private, static and final.",
      "An interface’s methods are by default public and abstract.",
      "An interface cannot be part of the inheritance hierarchy."
    ],
    "answer": 2,
    "explanation": "Interface methods are public and abstract by default."
  },
  {
    "q": "When a subclass object is created ______________",
    "options": [
      "The very first constructor called is the subclass’ constructor.",
      "Any one of the constructors across the hierarchy can be called in a random order.",
      "The last constructor called is the constructor of the superclass.",
      "The very first constructor called is the top most superclass’ constructor in the hierarchy."
    ],
    "answer": 3,
    "explanation": "Constructor execution starts from the topmost superclass."
  },
  {
    "q": "When a method is overridden_____________.",
    "options": [
      "Both methods have exactly same signature.",
      "Java uses it to implement compile time polymorphism.",
      "The super keyword is used to call the overriding method.",
      "The overridden method must be final always."
    ],
    "answer": 0,
    "explanation": "Overriding requires the same method signature in subclass."
  },
  {
    "q": "A reference variable can refer to_____________.",
    "options": [
      "An object of the superclass",
      "An object of its class type only",
      "An object of any class",
      "An object of subclass’s or its class type"
    ],
    "answer": 3,
    "explanation": "Reference variables can refer to objects of their class or subclasses."
  },
  {
    "q": "When a class must not be inherited, it must be declared using the____________ keyword.",
    "options": ["this", "super", "final", "abstract"],
    "answer": 2,
    "explanation": "The final keyword prevents inheritance."
  },
  {
    "q": "Which one of the following is an incorrect statement about algorithms?",
    "options": [
      "Algorithm is composed of a finite set of steps",
      "Each step may require one or more operations",
      "Each operation has to be effective but not necessarily definite",
      "All of the above"
    ],
    "answer": 2,
    "explanation": "Operations must be both effective and definite."
  },
  {
    "q": "Which one of the following is correct about running time analysis?",
    "options": [
      "Determine how running time increases as the computer resources increases",
      "Determine how running time increases as the size of the problem increases",
      "Determine how running time decreases as the computer resources increases",
      "None of the above"
    ],
    "answer": 1,
    "explanation": "Running time analysis studies growth with respect to input size."
  },
  {
    "q": "Which one of the following is correct about comparing algorithms?",
    "options": [
      "Comparing based on execution times is good for all cases",
      "Comparing based on number of statements helps to compare universally",
      "Express running time as a function of the input size n is ideal",
      "All of the above"
    ],
    "answer": 2,
    "explanation": "Using asymptotic functions of input size is the best comparison method."
  },
  {
    "q": "Which one of the following is incorrect about principle of optimality?",
    "options": [
      "An optimal sequence may have non-optimal subsequence",
      "Each subsequence must also be optimal",
      "Need to show principle applies before dynamic programming",
      "All of the above"
    ],
    "answer": 0,
    "explanation": "Principle of optimality states subsequences must also be optimal."
  },
  {
    "q": "Which one of the following is a correct asymptotic notation?",
    "options": [
      "Big O is asymptotic upper bound",
      "Big O is asymptotic lower bound",
      "Big Θ is asymptotic tight bound",
      "All of the above"
    ],
    "answer": 3,
    "explanation": "Big O is upper bound and Big Theta is tight bound."
  },
  {
    "q": "Which one of the following is correct about heap data structure?",
    "options": [
      "A heap is a nearly complete binary tree",
      "All levels are always full",
      "The last level may not be full, filled right to left",
      "None"
    ],
    "answer": 0,
    "explanation": "Heap is a complete or nearly complete binary tree."
  },
  {
    "q": "What does each iteration of the insertion sort algorithm do?",
    "options": [
      "Takes next smallest element and inserts at beginning",
      "Takes next element from unsorted portion and inserts into sorted portion",
      "Sorted subarrays inserted into larger array",
      "Determines pivot location and inserts"
    ],
    "answer": 1,
    "explanation": "Insertion sort builds sorted portion one element at a time."
  },
  {
    "q": "Using a binary search, what is the maximum number of comparisons required to find a search key in a 31-element sorted array?",
    "options": ["4", "5", "32", "1"],
    "answer": 1,
    "explanation": "Binary search comparisons are about log2(n), log2(31) ≈ 5."
  },
  {
    "q": "In order to get information stored in a binary search tree in descending order, one should traverse it in which order?",
    "options": [
      "Left, parent, right",
      "Right, parent, left",
      "Parent, left, right",
      "Right, left, parent"
    ],
    "answer": 1,
    "explanation": "Reverse inorder traversal gives descending order."
  },
  {
    "q": "Which of the following statement is true?",
    "options": [
      "Binary search is less efficient than linear search and requires sorted array",
      "Binary search is more efficient than linear search and requires sorted array",
      "Binary search is more efficient than linear search and requires unsorted array",
      "Binary search is less efficient than linear search and requires unsorted array"
    ],
    "answer": 1,
    "explanation": "Binary search is faster but requires sorted data."
  }












]




};


let currentExam = [];
let currentIndex = 0;
let score = 0;

// Load selected exam
function loadExam(year) {
    currentExam = exams[year];
    currentIndex = 0;
    score = 0;
    document.getElementById('score-display').style.display = 'none';
    showQuestion();
}

// Display current question
function showQuestion() {
    if (currentIndex >= currentExam.length) {
        submitExam();
        return;
    }

    const qObj = currentExam[currentIndex];
    const questionText = document.getElementById('question-text');
    const optionsDiv = document.getElementById('options');
    const explanationDiv = document.getElementById('explanation');

    questionText.textContent = `Q${currentIndex + 1}. ${qObj.q}`;
    explanationDiv.style.display = 'none';
    explanationDiv.textContent = qObj.explanation;

    optionsDiv.innerHTML = '';
    qObj.options.forEach((option, idx) => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.className = 'option-btn';
        btn.onclick = () => checkAnswer(idx);
        optionsDiv.appendChild(btn);
    });
}

// Check selected answer
function checkAnswer(selected) {
    const qObj = currentExam[currentIndex];
    const optionBtns = document.querySelectorAll('.option-btn');
    
    optionBtns.forEach((btn, idx) => {
        if(idx === qObj.answer) btn.style.backgroundColor = '#4CAF50'; // correct green
        else if(idx === selected) btn.style.backgroundColor = '#F44336'; // wrong red
        btn.disabled = true;
    });

    // Show explanation
    const explanationDiv = document.getElementById('explanation');
    explanationDiv.style.display = 'block';

    // Update score
    if(selected === qObj.answer) score++;
}

// Next question
function nextQuestion() {
    if(currentIndex < currentExam.length - 1){
        currentIndex++;
        showQuestion();
    }
}

// Previous question
function prevQuestion() {
    if(currentIndex > 0){
        currentIndex--;
        showQuestion();
    }
}

// Submit exam
function submitExam() {
    document.getElementById('question-text').textContent = `Exam Completed! Your score: ${score}/${currentExam.length}`;
    document.getElementById('options').innerHTML = '';
    document.getElementById('explanation').style.display = 'none';
    document.getElementById('score-display').style.display = 'block';
    document.getElementById('score-display').textContent = `You scored ${score} out of ${currentExam.length}`;
}