import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "spreadsheets",
  title: "Spreadsheets & Excel",
  emoji: "📊",
  category: "engineering",
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
