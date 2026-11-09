import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "spreadsheets",
  title: "Spreadsheets & Excel",
  emoji: "📊",
  category: "engineering",
  narrative: {
    "5-7": [
      { heading: "Imagine tracking your pocket money in a table…", text: "You could write down each day, what you spent, and what's left — in rows and columns on paper. A spreadsheet is like a magical version of that table where you can type numbers and it does all the adding and calculating for you, automatically." },
      { heading: "What is a spreadsheet?", text: "A spreadsheet (like Microsoft Excel or Google Sheets) is a grid of cells — boxes arranged in rows (numbered 1, 2, 3…) and columns (lettered A, B, C…). Each cell can hold text, a number, or a formula that calculates something.", diagramId: "cell-grid" },
      { heading: "Formulas do the maths for you", text: "If you type =SUM(B2:B10) in a cell, the spreadsheet adds up all the numbers in column B from row 2 to row 10 — instantly, every time you change any value. =AVERAGE gives the mean. =MAX finds the biggest. No calculator needed!", diagramId: "formulas" },
      { heading: "In your daily life…", text: "Teachers use spreadsheets to track grades. Parents use them to track expenses. Scientists use them to analyse data. Business people use them constantly. Learning spreadsheets is one of the most practical digital skills you can have." },
    ],
    "8-10": [
      { heading: "Before spreadsheets, accountants did everything by hand", text: "Financial calculations in the 1970s required teams of human 'computers' — people who sat with calculators and paper, recalculating every row when any number changed. VisiCalc (1979), the first spreadsheet, made one person as productive as a whole accounting team." },
      { heading: "The grid — cells, rows, and columns", text: "Every cell has an address: column letter + row number. B3 is column B, row 3. Ranges: B2:B10 means all cells from B2 to B10. You can reference cells in formulas: =A1+B1 adds the values in those two cells. When you copy a formula, the cell references update automatically.", diagramId: "cell-grid" },
      { heading: "Essential formulas", text: "=SUM(range): add up numbers. =AVERAGE(range): find the mean. =MAX(range): largest value. =MIN(range): smallest. =COUNT(range): count cells with numbers. =IF(condition, yes_value, no_value): conditional logic. =VLOOKUP: search a table for a matching value.", diagramId: "formulas" },
      { heading: "Charts — visualising data", text: "Select a range of data and insert a chart: bar chart (comparing categories), line chart (trends over time), pie chart (proportions). Charts update automatically when data changes. Visualising data reveals patterns that raw numbers hide." },
    ],
    "11-14": [
      { heading: "Spreadsheet as a programming environment", text: "A spreadsheet is a lazy functional programming language. Cells are immutable values or pure functions (formulas). The dependency graph is computed automatically — change A1 and every cell that references it recomputes. VLOOKUP, INDEX/MATCH, XLOOKUP are essentially hash table lookups. Array formulas operate on entire ranges." },
      { heading: "Data organisation principles", text: "Tabular data: each row is one record, each column is one attribute. First row: headers. No merged cells in data ranges. Consistent types per column. This structure enables sorting, filtering, pivot tables, and import into databases. Excel Power Query handles ETL (extract, transform, load) on structured data.", diagramId: "cell-grid" },
      { heading: "Advanced formulas and array operations", text: "=SUMIF(range, criteria, sum_range): conditional sum. =VLOOKUP(value, table, col, [exact]): look up in a table. =INDEX(range, row, col): return cell by position. XLOOKUP replaces VLOOKUP. Dynamic array formulas (=UNIQUE, =SORT, =FILTER) spill results across multiple cells automatically.", diagramId: "formulas" },
      { heading: "Pivot tables — summarising large datasets", text: "A pivot table summarises thousands of rows into a compact summary. Choose rows (grouping), columns (another grouping), values (sum/average/count), and filters. It's like GROUP BY in SQL — without writing any code. Pivot tables are the most powerful spreadsheet feature for data analysis." },
    ],
    "15-18": [
      { heading: "Spreadsheets as the world's most used programming language", text: "Estimates suggest 750M+ people use Excel — making spreadsheet formulas the most used 'programming language'. Excel supports a Turing-complete lambda calculus (via LAMBDA function), recursive named functions, and lambda-based higher-order functions. The 2021 Dynamic Arrays feature brought functional array programming to mainstream users." },
      { heading: "Excel internals — the dependency engine", text: "Excel maintains a directed acyclic dependency graph (DAG) of cell dependencies. On change, it performs a topological sort to determine recalculation order. The calculation engine runs C++ code — VLOOKUP on 1M rows completes in <100ms. Array formulas and volatile functions (NOW(), RAND()) have special handling.", diagramId: "formulas" },
      { heading: "Spreadsheet anti-patterns and data quality", text: "Common spreadsheet disasters: merged cells break sorting. Data and formulas in the same column. Hardcoded constants in formulas. No data validation. VBA macros that mutate data unpredictably. These issues have caused financial reporting errors worth billions (the Enron, JPMorgan CIO, and Reinhart-Rogoff cases all involved spreadsheet errors).", diagramId: "cell-grid" },
      { heading: "Beyond Excel — pandas, SQL, and BI tools", text: "Python pandas replaces spreadsheets for large datasets (>1M rows). SQL replaces pivot tables for multi-table analysis. Business intelligence tools (Tableau, Power BI, Metabase) build on databases, not spreadsheets. Knowing when to graduate from spreadsheets to code or SQL is a key data analyst skill." },
    ],
  },
  story: {
    "5-7": "A spreadsheet is like a super-smart table! Each box (called a cell) can hold a number or word. And the magic is — if you tell it a rule, like 'always add column A and column B together', it does the maths for you automatically!",
    "8-10": "Excel organises data in rows and columns. Each cell has an address like A1, B2. You can write formulas like =A1+B1 to do maths, or =SUM(A1:A10) to add a whole column. Charts turn numbers into bar graphs, line graphs, and pie charts. These tools help businesses track sales, students track grades, and scientists analyse data.",
    "11-14": "Excel key skills: Cell referencing — A1 (relative), $A$1 (absolute), $A1 (mixed). Functions: SUM, AVERAGE, COUNT, IF, VLOOKUP/XLOOKUP, INDEX/MATCH. Conditional formatting highlights cells based on rules. Pivot tables summarise large datasets. Charts with custom axes, labels, and trendlines. Formula auditing with Trace Precedents/Dependents to debug complex sheets.",
    "15-18": "Excel/Sheets at power-user level: Array formulas (CTRL+SHIFT+ENTER or new dynamic arrays with SPILL), XLOOKUP replaces VLOOKUP with binary search and reverse lookup, LAMBDA creates reusable custom functions without VBA. Data validation restricts input to dropdowns or ranges. Power Query (Get & Transform) imports and reshapes data from external sources without formulas. Pivot charts with slicers enable interactive dashboards. VBA (Visual Basic for Applications) automates repetitive tasks — recorded macros or written subs with loops, conditionals, and object model (Application → Workbook → Worksheet → Range). Statistical analysis: LINEST for regression, TTEST for hypothesis testing, SOLVER add-in for linear programming. For large datasets, Python's pandas (read_excel, pivot_table, groupby) or R outperform Excel but Excel remains the universal tool. Conditional formatting with formula rules enables heatmaps. Named ranges and table structures (Ctrl+T) with structured references (`Table1[Column]`) keep large sheets maintainable.",
  },
  analogy: {
    "5-7": "A spreadsheet is a magic calculator that organises all your numbers in a table and does maths on the whole table at once.",
    "8-10": "Excel is like having a calculator that also organises data into tables and draws charts automatically.",
    "11-14": "VLOOKUP is like a dictionary — give it a word (key), it finds the entry and returns the definition (value) from another column.",
    "15-18": "Power Query is like an ETL pipeline — Extract from source, Transform/clean the data, Load into your spreadsheet — all without formulas.",
  },
  photo: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=700&fit=crop",
  photoAlt: "Person analyzing financial data in a spreadsheet with charts",
  keyFacts: [
    { emoji: "📊", label: "Format", value: ".xlsx (Excel Open XML)", detail: ".xlsx is a ZIP file containing XML. Max 1,048,576 rows × 16,384 columns in Excel." },
    { emoji: "🔢", label: "Formula", value: "=SUM(A1:A10) adds 10 cells", detail: "Formulas start with =. They can reference other cells, recalculating automatically." },
    { emoji: "🌐", label: "Tools", value: "Excel, Google Sheets, LibreOffice Calc", detail: "Google Sheets is free and collaborative. Excel is industry standard for finance/data." },
    { emoji: "📈", label: "Charts", value: "Bar, Line, Pie, Scatter, and more", detail: "Select data → Insert → Chart. Spreadsheets turn numbers into visuals automatically." },
    { emoji: "📅", label: "First Spreadsheet", value: "VisiCalc, 1979 (Apple II)", detail: "VisiCalc was the first spreadsheet. It sold the Apple II to businesses — 'the killer app'." },
    { emoji: "💼", label: "Used For", value: "Finance, data analysis, budgeting", detail: "Most companies run on spreadsheets. Data analysts use Excel or Google Sheets daily." },
  ],
  funFact: "Excel was first released in 1985 for the Macintosh. Financial models worth trillions of dollars still run on Excel — JP Morgan's 2012 'London Whale' $6.2 billion trading loss was partly attributed to errors in a complex Excel spreadsheet!",
  dos: [
    "Use absolute references ($A$1) in formulas you'll copy across rows/columns",
    "Press Ctrl+T to format data as a Table — structured references update automatically as you add rows",
    "Use named ranges (Formulas → Define Name) to make formulas readable",
    "Freeze panes (View → Freeze Panes) when scrolling large datasets",
  ],
  donts: [
    "Don't store dates as text — use proper date values so DATEDIF and date maths work",
    "Don't merge cells in data ranges — it breaks sorting, filtering, and pivot tables",
    "Don't use VLOOKUP for large datasets — XLOOKUP or INDEX/MATCH is faster and more flexible",
    "Don't hardcode numbers inside formulas — put them in labelled cells for easy changes",
  ],
  quiz: [
    {
      for: "5-7",
      question: "What does =SUM(A1:A5) do?",
      choices: ["Adds up all the numbers in cells A1 through A5", "Shows the largest number", "Counts how many cells have numbers"],
      correct: 0,
      explanation: "SUM adds all values in a range — one of the most used functions in Excel!",
    },
    {
      for: "8-10",
      question: "What is a 'chart' in Excel?",
      choices: [
        "A visual picture of your data — bar chart, pie chart, line graph etc.",
        "A type of formula",
        "A shortcut key",
      ],
      correct: 0,
      explanation: "Charts turn tables of numbers into visual patterns humans can understand at a glance!",
    },
    {
      for: "11-14",
      question: "What does $A$1 (absolute reference) do vs A1 (relative reference)?",
      choices: [
        "Absolute reference always points to cell A1 even when the formula is copied; relative reference adjusts to the new row/column",
        "Absolute makes the cell bold",
        "Absolute locks the cell so others can't edit it",
      ],
      correct: 0,
      explanation: "If =A1*B1 is in C1 and copied to C2, it becomes =A2*B2. If =$A$1*B1 is copied to C2, it becomes =$A$1*B2 — A1 stays fixed.",
    },
    {
      for: "15-18",
      question: "What problem does XLOOKUP solve that VLOOKUP has?",
      choices: [
        "XLOOKUP can look in any direction (including left), returns ranges not just single cells, handles not-found gracefully, and uses binary search by default",
        "XLOOKUP is faster because it uses GPU acceleration",
        "XLOOKUP works on dates but VLOOKUP does not",
      ],
      correct: 0,
      explanation: "VLOOKUP only looks right, needs the lookup column first, and silently returns wrong results if columns shift. XLOOKUP is directional, safer, and more powerful.",
    },
    {
      for: "15-18",
      question: "What is a Pivot Table?",
      choices: [
        "An interactive summary table that aggregates (SUM/COUNT/AVERAGE) large datasets by any grouping, updatable by drag-and-drop",
        "A chart that rotates automatically",
        "A table that sorts alphabetically",
      ],
      correct: 0,
      explanation: "Pivot tables summarise thousands of rows in seconds — drag a field to 'Rows' and another to 'Values' and get a cross-tabulation instantly, without any formulas.",
    },
  ],
};

export default lesson;
