import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports : [  ]
})

export class QuestionsModelModule { 
  allQuestionData : any;
  constructor() {
    this.allQuestionData = [
        {   
            "subject_id" : "c",
            "subject" : "C Programming",
            "questions" : [
                {   
                    "q_number" : "0",
                    "question" : "In which numbering system can the binary number 1011011111000101 be easily converted to?",
                    "options" : [
                        "Decimal system",
                        "Hexadecimal system",
                        "Ocatal system",
                        "None of these"
                    ],
                    "answer" : 1
                },
                {   
                    "q_number" : "1",
                    "question" : "Which bitwise operator is suitable for turning off a particular bit in a number",
                    "options" : [
                        "&& operator",
                        "& operator",
                        "|| operator",
                        "! operator"
                    ],
                    "answer" : 1
                },
                {   
                    "q_number" : "2",
                    "question" : "Which of the following special symbol allowed in a variable name",
                    "options" : [
                        "* (asterisk)",
                        "| (pipeline)",
                        "- (hyphen)",
                        "_ (underscore)"
                    ],
                    "answer" : 3
                },
                {   
                    "q_number" : "3",
                    "question" : "\"An array of three pointers to chars\"",
                    "options" : [
                        "char *ptr[3]();",
                        "char *ptr[3];",
                        "char (*ptr[3])();",
                        "char **ptr[3];"
                    ],
                    "answer" : 1
                },
                {   
                    "q_number" : "4",
                    "question" : "The library function used to find the last occurrence of a character in a string is",
                    "options" : [
                        "strnstr()",
                        "laststr()",
                        "strrchr()",
                        "strstr()"
                    ],
                    "answer" : 3
                }
            ]
        },
        {   
            "subject_id" : "java",
            "subject" : "Java Programming (Object Oriented Programming)",
            "questions" : [
                {   
                    "q_number" : "0",
                    "question" : "Which one of these lists contains only Java programming language keywords?",
                    "options" : [
                        "class, if, void, long, Int, continue",
                        "goto, instanceof, native, finally, default, throws",
                        "try, virtual, throw, final, volatile, transient",
                        "strictfp, constant, super, implements, do"
                    ],
                    "answer" : 1
                },
                {   
                    "q_number" : "1",
                    "question" : "You want subclasses in any package to have access to members of a superclass. Which is the most restrictive access that accomplishes this objective?",
                    "options" : [
                        "public",
                        "private",
                        "protected",
                        "transient"
                    ],
                    "answer" : 2
                },
                {   
                    "q_number" : "2",
                    "question" : "Which class does not override the equals() and hashCode() methods, inheriting them directly from class Object?",
                    "options" : [
                        "java.lang.String",
                        "java.lang.Double",
                        "java.lang.StringBuffer",
                        "java.lang.Character"
                    ],
                    "answer" : 2
                },
                {   
                    "q_number" : "3",
                    "question" : "Which interface does java.util.Hashtable implement?",
                    "options" : [
                        "Java.util.Map",
                        "Java.util.List",
                        "Java.util.HashTable",
                        "Java.util.Collection"
                    ],
                    "answer" : 0
                },
                {   
                    "q_number" : "4",
                    "question" : "What is the default value of short variable?",
                    "options" : [
                        "0.0",
                        "0",
                        "null",
                        "not defined"
                    ],
                    "answer" : 1
                }
            ]
        }
    ]
  }
}
