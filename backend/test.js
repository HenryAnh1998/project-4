const { decode } = require('jsonwebtoken')
const data = decode(
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InZnTDVEWG5wTHh0Nm1RcjZCa3BLWCJ9.eyJpc3MiOiJodHRwczovL2Rldi1laW9ubDRicmY3Z3M2ZDc4LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDEwNTg0NzYzMTE3ODQ5MzY5NTA2MSIsImF1ZCI6Ilp1QUZHUUs0bDBxbTQwcndZd3pkOWFIUVQxaGgwbXFHIiwiaWF0IjoxNjY3ODgyMTE1LCJleHAiOjE2Njc5MjQxMTUsImF0X2hhc2giOiJYWU5yX1FHQkhjRDFDSUE3d1VOdWpnIiwic2lkIjoiMG1vQ0VjOEhGQjh3WVFmQ2JjdzFOTGRhZE1XWGpHVFEiLCJub25jZSI6ImlNb1Z4dG5lN1ozLjVuYTBISm8xQXJrSklndUFHSzJUIn0.dGwt5qyN3id9FAuTg5ZuciTV11KZolkJLfIRiprDwplzGBd9Mgj0JxjOLRNJO8caXNtvLsQ3bpyA1F8ThsFS3wEmZE5U04XIZomyOa5jlKUQBn5qdyQUfdZg5_HG1Wq8HSg4Ky55PfQK-s0aaiLsGTVqtrq0D6Lybl26cfchKj0N62U7St8GsacpZCFF-PiRUgho069LHIr9R2Btp98YGNgku-IS1dVVxLCY1FQXJQYlWlg3B5GXO9dHXjGFth2EgkXpNS3sxt77sCdqmUPsJuEN0CkviyDNU5YzNVce4zKc7YKjwJg5M6arykXDta5BqUoBF3GWQ1Di6DWvht3',
  { complete: true }
)
console.log(data)
