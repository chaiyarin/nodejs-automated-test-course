# Workshop: Unit Testing with Jest

A hands-on workshop for learning unit testing in Node.js using **Jest**.

---

## Prerequisites

- Node.js (v18+)
- npm
- Git

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/chaiyarin/nodejs-automated-test-course
cd workshop-jest
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run all tests

```bash
npm test
```

### 4. Run a specific test file

```bash
npx jest tests/mathUtils.test.js
```

### 5. Run tests in watch mode (re-runs on file save)

```bash
npx jest --watch
```

---

## Workshop Structure

Each lesson has two branches:

| Branch | Purpose |
|--------|---------|
| `lesson/ws-XX` | **Workshop** — contains the exercise for you to complete |
| `lesson/ws-XX-solution` | **Solution** — the completed answer |

### How to switch to a lesson

```bash
git checkout lesson/ws-1a        # switch to the exercise
git checkout lesson/ws-1a-solution  # switch to see the solution
```

> After switching branches, run `npm test` to see the current test results.

---

## Lesson Overview

### Series 1 — Unit Testing Fundamentals

| Lesson | Branch | Topic | Test File |
|--------|--------|-------|-----------|
| 1a | `lesson/ws-1a` | Basic unit tests — `add`, `subtract`, `multiply`, `divide` | `mathUtils.test.js` |
| 1b | `lesson/ws-1b` | Writing test cases — grade calculator | `gradeCalculator.test.js` |
| 1c | `lesson/ws-1c` | Testing conditions — password validator | `passwordValidator.test.js` |
| 1e | `lesson/ws-1e` | Module exports — ticket pricing | `ticketPricing.test.js` |
| 1f | `lesson/ws-1f-solution` | Parameterised tests — ticket pricing extended | `ticketPricing.test.js` |
| 1g | `lesson/ws-1g` | Skip & todo tests — shopping cart | `shoppingCart.test.js` |
| 1h | `lesson/ws-1h` | String assertions — message formatter | `messageFormatter.test.js` |
| 1i | `lesson/ws-1i` | Nested `describe` — message formatter | `messageFormatter.test.js` |
| 1j | `lesson/ws-1j` | Array & object tests — user collection | `userCollection.test.js` |
| 1k | `lesson/ws-1k` | Stateful tests — event logger | `eventLogger.test.js` |

### Series 2 — Test Doubles (Mock / Stub / Dummy / Spy)

| Lesson | Branch | Topic | Test File |
|--------|--------|-------|-----------|
| 2a | `lesson/ws-2a` | Dummy — withdrawal service | `withdrawalService.test.js` |
| 2b | `lesson/ws-2b` | Stub — report service | `reportService.test.js` |
| 2c | `lesson/ws-2c` | Stub with `jest.fn()` — weather service | `weatherService.test.js` |
| 2d | `lesson/ws-2d` | Mock / Spy — notification sender | `notificationSender.test.js` |

---

## Typical Workflow

```bash
# 1. Checkout the exercise branch
git checkout lesson/ws-1a

# 2. Run the tests (they will fail — that's expected)
npm test

# 3. Open the test file and write your code in src/
#    tests/mathUtils.test.js  →  edit  src/mathUtils.js

# 4. Save and re-run tests until they pass
npm test

# 5. Compare with the solution when done
git checkout lesson/ws-1a-solution
npm test
```

---

## Project Structure

```
workshop-jest/
├── src/                   # Source files you will implement
│   ├── mathUtils.js
│   ├── gradeCalculator.js
│   ├── passwordValidator.js
│   ├── ticketPricing.js
│   ├── shoppingCart.js
│   ├── messageFormatter.js
│   ├── userCollection.js
│   ├── eventLogger.js
│   ├── withdrawalService.js
│   ├── reportService.js
│   ├── weatherService.js
│   └── notificationSender.js
├── tests/                 # Test files (do not modify)
│   └── *.test.js
├── package.json
└── README.md
```

---

## All Branches

```
lesson/ws-1a              lesson/ws-1a-solution
lesson/ws-1b              lesson/ws-1b-solution
lesson/ws-1c              lesson/ws-1c-solution
lesson/ws-1e              lesson/ws-1e-solution
lesson/ws-1f-solution
lesson/ws-1g              lesson/ws-1g-solution
lesson/ws-1h              lesson/ws-1h-solution
lesson/ws-1i              lesson/ws-1i-solution
lesson/ws-1j              lesson/ws-1j-solution
lesson/ws-1k              lesson/ws-1k-solution
lesson/ws-2a              lesson/ws-2a-solution
lesson/ws-2b              lesson/ws-2b-solution
lesson/ws-2c              lesson/ws-2c-solution
lesson/ws-2d
```

> **Note:** `master` branch contains the completed project with all source and test files.
