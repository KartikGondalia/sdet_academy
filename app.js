// ============ QUESTIONS DATABASE ============
const questionsDatabase = {
    mcq: [
        {
            id: 1,
            question: "What is the primary purpose of SDET (Software Development Engineer in Test)?",
            options: [
                "To manually test applications",
                "To design and develop automated test frameworks and tools",
                "To manage the QA team",
                "To write production code"
            ],
            correct: 1,
            difficulty: "easy",
            type: "mcq",
            explanation: "SDET is responsible for designing, developing, and maintaining automated test frameworks, test infrastructure, and tools that enable efficient testing at scale.",
            tags: ["Testing Concepts"]
        },
        {
            id: 2,
            question: "Which of the following is NOT a design pattern in automation testing?",
            options: [
                "Page Object Model",
                "Factory Pattern",
                "Singleton Pattern",
                "Waterfall Pattern"
            ],
            correct: 3,
            difficulty: "medium",
            type: "mcq",
            explanation: "Waterfall is a software development methodology, not a design pattern used in automation testing. POM, Factory Pattern, and Singleton are all commonly used in test automation.",
            tags: ["Frameworks"]
        },
        {
            id: 3,
            question: "What does WebDriver protocol define?",
            options: [
                "How to write test cases",
                "A remote control interface for browsers",
                "A database connection protocol",
                "A testing framework"
            ],
            correct: 1,
            difficulty: "medium",
            type: "mcq",
            explanation: "WebDriver is a remote control interface that enables programs to inspect and control the behavior of web browsers. It's the foundation for Selenium WebDriver.",
            tags: ["Selenium"]
        },
        {
            id: 4,
            question: "In TestNG, what is the purpose of @DataProvider annotation?",
            options: [
                "To provide data for test methods from external sources",
                "To define test execution order",
                "To skip a test",
                "To set timeout for a test"
            ],
            correct: 0,
            difficulty: "easy",
            type: "mcq",
            explanation: "@DataProvider allows you to run a single test method with multiple sets of data, enabling data-driven testing without hardcoding values.",
            tags: ["Frameworks"]
        },
        {
            id: 5,
            question: "What is the difference between @BeforeTest and @BeforeMethod in TestNG?",
            options: [
                "There is no difference",
                "@BeforeTest runs once before all test methods, @BeforeMethod runs before each test method",
                "@BeforeMethod runs once before all test methods, @BeforeTest runs before each test method",
                "Both run at the same time"
            ],
            correct: 1,
            difficulty: "medium",
            type: "mcq",
            explanation: "@BeforeTest executes once per test class (or test tag), while @BeforeMethod executes before every individual test method in a class.",
            tags: ["Frameworks"]
        }
    ],
    
    coding: [
        {
            id: 101,
            question: "Write a Java method that finds the maximum number in an array of integers.",
            difficulty: "easy",
            type: "coding",
            expectedCode: `public static int findMax(int[] arr) {
    int max = arr[0];
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}`,
            explanation: `This method iterates through the array and compares each element with the current maximum value. It starts with the first element as the initial maximum and updates it whenever a larger element is found. Time Complexity: O(n)`,
            tags: ["Java"]
        },
        {
            id: 102,
            question: "Write a method to reverse a string in Java.",
            difficulty: "easy",
            type: "coding",
            expectedCode: `public static String reverseString(String str) {
    return new StringBuilder(str).reverse().toString();
}

// Alternative approach:
public static String reverseString(String str) {
    String reversed = "";
    for (int i = str.length() - 1; i >= 0; i--) {
        reversed += str.charAt(i);
    }
    return reversed;
}`,
            explanation: `The first approach uses StringBuilder's built-in reverse() method. The second approach iterates from the end to the beginning and builds the reversed string. StringBuilder is more efficient for large strings.`,
            tags: ["Java"]
        },
        {
            id: 103,
            question: "Implement a function to handle XPath for dynamic elements in Selenium.",
            difficulty: "medium",
            type: "coding",
            expectedCode: `public static By createDynamicXPath(String attribute, String value) {
    String xpath = String.format("//*[@%s='%s']", attribute, value);
    return By.xpath(xpath);
}

// Usage example:
WebElement element = driver.findElement(createDynamicXPath("id", "buttonId"));

// More complex dynamic XPath:
public static By createComplexXPath(String tagName, String attribute, String value) {
    String xpath = String.format("//%s[@%s='%s']", tagName, attribute, value);
    return By.xpath(xpath);
}`,
            explanation: `This function creates dynamic XPath expressions that can adapt to changing attribute values. This is useful when element identifiers change or when dealing with generated IDs. Always validate XPaths to ensure they are unique and stable.`,
            tags: ["Selenium"]
        },
        {
            id: 104,
            question: "Write a method to handle explicit wait for an element to be clickable.",
            difficulty: "medium",
            type: "coding",
            expectedCode: `public static void waitForElementToBeClickable(WebDriver driver, By locator, int timeoutSeconds) {
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(timeoutSeconds));
    WebElement element = wait.until(ExpectedConditions.elementToBeClickable(locator));
    element.click();
}

// Alternative with custom timeout:
private WebDriverWait wait;

public YourPage(WebDriver driver) {
    this.driver = driver;
    this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
}

public void clickElement(By locator) {
    wait.until(ExpectedConditions.elementToBeClickable(locator)).click();
}`,
            explanation: `Explicit waits make tests more reliable by waiting for specific conditions before proceeding. elementToBeClickable() ensures the element is both visible and enabled before clicking. This prevents StaleElementReferenceException and ElementNotInteractableException.`,
            tags: ["Selenium"]
        }
    ],

    fillblank: [
        {
            id: 201,
            question: "In Selenium, the _______ method is used to switch between different windows or tabs.",
            blank: "switchTo()",
            difficulty: "easy",
            type: "fillblank",
            explanation: "The switchTo() method is used to switch between windows, tabs, frames, and alerts. For example: driver.switchTo().window(windowHandle) or driver.switchTo().frame(frameReference)",
            tags: ["Selenium"]
        },
        {
            id: 202,
            question: "_______ is a testing framework that provides annotations like @Test, @Before, @After for test structure.",
            blank: "TestNG",
            difficulty: "easy",
            type: "fillblank",
            explanation: "TestNG (Test Next Generation) is a popular testing framework for Java that improves upon JUnit. It supports annotations for organizing tests, fixtures, and provides advanced features like data-driven testing.",
            tags: ["Frameworks"]
        },
        {
            id: 203,
            question: "The _______ design pattern separates test logic from page-specific code by creating page objects.",
            blank: "Page Object Model",
            difficulty: "medium",
            type: "fillblank",
            explanation: "The Page Object Model (POM) is a design pattern that creates a separate class for each web page. Each class contains the locators and methods for interacting with that page, making tests more maintainable.",
            tags: ["Frameworks"]
        },
        {
            id: 204,
            question: "An _______ in XPath is an attribute-based selector that helps identify web elements uniquely.",
            blank: "@attribute",
            difficulty: "medium",
            type: "fillblank",
            explanation: "In XPath, @ symbol is used to select attributes. For example: //*[@id='myElement'] selects an element with id='myElement'.",
            tags: ["Selenium"]
        },
        {
            id: 205,
            question: "The _______ exception is thrown when trying to interact with a stale element that is no longer in the DOM.",
            blank: "StaleElementReferenceException",
            difficulty: "medium",
            type: "fillblank",
            explanation: "StaleElementReferenceException occurs when an element reference is no longer valid in the DOM. This often happens due to page refreshes or dynamic updates. Using explicit waits and re-locating elements can prevent this.",
            tags: ["Selenium"]
        }
    ]
};

// ============ INTERVIEW QUESTIONS DATABASE ============
const interviewQuestions = [
    {
        id: 1,
        question: "What is SDET and how does it differ from QA?",
        topic: "testing",
        difficulty: "beginner",
        company: "Multiple Companies",
        answer: `SDET (Software Development Engineer in Test) and QA (Quality Assurance) have distinct roles:

SDET:
- Develops automation frameworks and tools
- Writes code-like test scripts
- Focuses on test infrastructure
- Uses programming languages and design patterns
- Builds reusable frameworks and utilities
- More technical and development-focused

QA:
- Performs manual and automated testing
- Focuses on finding bugs and issues
- Tests overall application quality
- Requires testing knowledge but not necessarily programming
- Executes test cases
- More process and quality-focused

Key Difference: SDET builds the tools that QAs use, while QAs use those tools to test applications.`,
        relatedTopics: ["Testing Concepts", "SDET Role"]
    },
    {
        id: 2,
        question: "Explain the Page Object Model (POM) design pattern with an example.",
        topic: "frameworks",
        difficulty: "intermediate",
        company: "Google, Amazon",
        answer: `Page Object Model is a design pattern that creates an abstraction of web application pages:

Benefits:
- Improves test maintainability
- Reduces code duplication
- Makes tests more readable
- Easy to update when page structure changes

Example:
\`\`\`java
// LoginPage.java - Page Object
public class LoginPage {
    private WebDriver driver;
    
    // Locators
    private By usernameField = By.id("username");
    private By passwordField = By.id("password");
    private By loginButton = By.xpath("//button[@type='submit']");
    
    public LoginPage(WebDriver driver) {
        this.driver = driver;
    }
    
    // Page methods
    public void enterUsername(String username) {
        driver.findElement(usernameField).sendKeys(username);
    }
    
    public void enterPassword(String password) {
        driver.findElement(passwordField).sendKeys(password);
    }
    
    public void clickLogin() {
        driver.findElement(loginButton).click();
    }
    
    public HomePage login(String username, String password) {
        enterUsername(username);
        enterPassword(password);
        clickLogin();
        return new HomePage(driver);
    }
}

// LoginTest.java - Test Class
public class LoginTest {
    @Test
    public void testSuccessfulLogin() {
        LoginPage loginPage = new LoginPage(driver);
        HomePage homePage = loginPage.login("user@example.com", "password");
        Assert.assertTrue(homePage.isUserLoggedIn());
    }
}
\`\`\`

Advantages:
- Readable test code
- Easy to maintain
- Changes to page structure only affect the page object`,
        relatedTopics: ["Design Patterns", "Selenium"]
    },
    {
        id: 3,
        question: "What is the difference between implicit and explicit waits?",
        topic: "selenium",
        difficulty: "intermediate",
        company: "Microsoft, Adobe",
        answer: `Implicit Waits:
- Set once globally for all elements
- WebDriver waits for specified time if element not found
- Applied globally throughout test execution
- Example: driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

Explicit Waits:
- Wait for specific conditions on specific elements
- More flexible and reliable
- Can wait for various conditions (visibility, clickability, etc.)
- Recommended approach

Example:
\`\`\`java
// Implicit Wait
driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

// Explicit Wait
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
WebElement element = wait.until(
    ExpectedConditions.elementToBeClickable(By.id("button"))
);
\`\`\`

Key Differences:
| Feature | Implicit | Explicit |
|---------|----------|----------|
| Scope | Global | Local |
| Flexibility | Less flexible | More flexible |
| Performance | Can be slow | Faster |
| Reliability | Lower | Higher |
| Best Practice | Not recommended alone | Recommended |

Best Practice:
Use explicit waits for better control and reliability. Avoid mixing implicit and explicit waits as they can cause unpredictable behavior.`,
        relatedTopics: ["Selenium", "Wait Strategies"]
    },
    {
        id: 4,
        question: "How would you handle dynamic elements in Selenium automation?",
        topic: "selenium",
        difficulty: "intermediate",
        company: "Amazon, Flipkart",
        answer: `Strategies to handle dynamic elements:

1. Using Dynamic XPath:
\`\`\`java
// Using contains() for partial matching
By.xpath("//*[contains(@id, 'dynamic')]")

// Using starts-with()
By.xpath("//*[starts-with(@id, 'btn_')]")

// Using text content
By.xpath("//button[contains(text(), 'Submit')]")
\`\`\`

2. Using Explicit Waits:
\`\`\`java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
WebElement element = wait.until(
    ExpectedConditions.presenceOfElementLocated(By.xpath("//*[contains(@id, 'dynamic')]"))
);
element.click();
\`\`\`

3. Using CSS Selectors:
\`\`\`java
// Using attribute selectors
By.cssSelector("[id^='btn_']")  // Starts with
By.cssSelector("[id*='submit']") // Contains
By.cssSelector("[id$='_btn']")   // Ends with
\`\`\`

4. Using JavaScript Executor:
\`\`\`java
public static void clickElementWithJS(WebDriver driver, By locator) {
    WebElement element = driver.findElement(locator);
    JavascriptExecutor js = (JavascriptExecutor) driver;
    js.executeScript("arguments[0].click();", element);
}
\`\`\`

Best Practices:
- Use contains() for partial attribute matching
- Combine multiple attributes for unique identification
- Use text content when IDs are too dynamic
- Implement proper waits
- Avoid hardcoding selectors`,
        relatedTopics: ["Selenium", "XPath", "Dynamic Elements"]
    },
    {
        id: 5,
        question: "What are Collections in Java and why are they important?",
        topic: "java",
        difficulty: "beginner",
        company: "Google, Microsoft",
        answer: `Collections are containers that hold groups of objects. The Java Collections Framework provides interfaces and classes for working with groups of objects.

Main Collection Types:

1. List (Ordered, Duplicates allowed):
\`\`\`java
List<String> fruits = new ArrayList<>();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Apple"); // Duplicates allowed
\`\`\`

2. Set (Unordered, No Duplicates):
\`\`\`java
Set<String> uniqueFruits = new HashSet<>();
uniqueFruits.add("Apple");
uniqueFruits.add("Banana");
uniqueFruits.add("Apple"); // Will not be added twice
\`\`\`

3. Map (Key-Value pairs):
\`\`\`java
Map<String, Integer> fruitCount = new HashMap<>();
fruitCount.put("Apple", 5);
fruitCount.put("Banana", 3);
\`\`\`

4. Queue (FIFO - First In First Out):
\`\`\`java
Queue<String> queue = new LinkedList<>();
queue.add("First");
queue.add("Second");
String first = queue.poll(); // Removes "First"
\`\`\`

Importance in SDET:
- Store test data and results
- Manage collections of web elements
- Handle multiple test scenarios
- Store API responses
- Manage test configuration data

Common Methods:
- add(), remove(), contains()
- get(), size(), isEmpty()
- clear(), iterator()`,
        relatedTopics: ["Java", "Data Structures"]
    },
    {
        id: 6,
        question: "Explain the TestNG framework and its advantages over JUnit.",
        topic: "frameworks",
        difficulty: "intermediate",
        company: "Infosys, TCS",
        answer: `TestNG (Test Next Generation) is a testing framework inspired by JUnit but with more powerful features.

Key Features of TestNG:

1. Annotations:
\`\`\`java
@BeforeSuite   // Runs before entire suite
@BeforeTest    // Runs before test tag
@BeforeClass   // Runs before test class
@BeforeMethod  // Runs before each test method
@Test          // Marks a test method
@AfterMethod   // Runs after each test method
@AfterClass    // Runs after test class
@AfterTest     // Runs after test tag
@AfterSuite    // Runs after entire suite
\`\`\`

2. Data-Driven Testing:
\`\`\`java
@DataProvider(name = "loginData")
public Object[][] getLoginData() {
    return new Object[][] {
        {"user1@email.com", "password1"},
        {"user2@email.com", "password2"},
        {"user3@email.com", "password3"}
    };
}

@Test(dataProvider = "loginData")
public void testLogin(String username, String password) {
    // Test code
}
\`\`\`

3. Parallel Testing:
\`\`\`xml
<!-- testng.xml -->
<suite parallel="methods" thread-count="5">
    <test name="ParallelTest">
        <classes>
            <class name="com.example.TestClass"/>
        </classes>
    </test>
</suite>
\`\`\`

4. Grouping Tests:
\`\`\`java
@Test(groups = {"smoke"})
public void testLogin() { }

@Test(groups = {"regression"})
public void testLogout() { }
\`\`\`

Advantages over JUnit:
| Feature | TestNG | JUnit |
|---------|--------|-------|
| Annotations | More flexible | Basic |
| Data-Driven | Native support | Plugin needed |
| Parallel Testing | Built-in | Limited |
| Test Grouping | Supported | Not supported |
| Test Dependency | Supported | Not supported |
| Configuration | testng.xml | Complex |
| Reports | Better HTML reports | Basic |

When to Use:
- Large test suites
- Parallel execution needed
- Complex test scenarios
- Multiple test groups
- Data-driven testing`,
        relatedTopics: ["Frameworks", "Testing"]
    },
    {
        id: 7,
        question: "What is CI/CD and how does it integrate with test automation?",
        topic: "frameworks",
        difficulty: "advanced",
        company: "Netflix, LinkedIn",
        answer: `CI/CD Pipeline:

CI (Continuous Integration):
- Developers integrate code multiple times daily
- Automated builds and tests run
- Issues detected early
- Tools: Jenkins, GitLab CI, GitHub Actions

CD (Continuous Deployment):
- Automated testing ensures code quality
- Code automatically deployed to production
- Rapid and frequent releases

Integration of Test Automation:

1. Build Trigger:
\`\`\`yaml
# GitHub Actions Example
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Tests
        run: mvn test
\`\`\`

2. Jenkins Integration:
\`\`\`xml
<project>
    <triggers>
        <pollSCM>
            <spec>H/15 * * * *</spec>
        </pollSCM>
    </triggers>
    <builders>
        <shell>
            <command>mvn clean test</command>
        </shell>
    </builders>
</project>
\`\`\`

3. Test Report Generation:
\`\`\`java
// Allure Reports Example
@Test
public void testLogin() {
    // Test code
    // Automatically generates Allure report
}
\`\`\`

Benefits:
- Fast feedback on code quality
- Automated testing at every commit
- Reduced manual testing
- Earlier bug detection
- Faster time to market
- Improved code reliability

SDET Role in CI/CD:
- Design test automation framework
- Maintain and optimize tests
- Integrate tests with CI/CD pipeline
- Generate reports and metrics
- Handle test environment setup
- Create reusable components`,
        relatedTopics: ["DevOps", "Frameworks", "Automation"]
    },
    {
        id: 8,
        question: "How would you implement data-driven testing in Selenium?",
        topic: "selenium",
        difficulty: "advanced",
        company: "Amazon, Microsoft",
        answer: `Data-Driven Testing allows running tests with multiple sets of data.

Approach 1: Using TestNG @DataProvider:
\`\`\`java
public class LoginTest {
    WebDriver driver;
    
    @BeforeMethod
    public void setUp() {
        driver = new ChromeDriver();
        driver.get("https://example.com/login");
    }
    
    @DataProvider(name = "loginCredentials")
    public Object[][] getLoginData() {
        return new Object[][] {
            {"user1@email.com", "pass123", true},
            {"user2@email.com", "pass456", true},
            {"invalid@email.com", "wrongpass", false},
            {"", "", false}
        };
    }
    
    @Test(dataProvider = "loginCredentials")
    public void testLogin(String email, String password, boolean shouldSucceed) {
        LoginPage loginPage = new LoginPage(driver);
        loginPage.enterEmail(email);
        loginPage.enterPassword(password);
        loginPage.clickLoginButton();
        
        if (shouldSucceed) {
            Assert.assertTrue(new HomePage(driver).isDisplayed());
        } else {
            Assert.assertTrue(loginPage.isErrorDisplayed());
        }
    }
    
    @AfterMethod
    public void tearDown() {
        driver.quit();
    }
}
\`\`\`

Approach 2: Reading from Excel/CSV:
\`\`\`java
public class ExcelDataProvider {
    public static Object[][] readExcelData(String filePath, String sheetName) 
            throws IOException {
        FileInputStream fis = new FileInputStream(filePath);
        Workbook workbook = new XSSFWorkbook(fis);
        Sheet sheet = workbook.getSheet(sheetName);
        
        int rows = sheet.getPhysicalNumberOfRows();
        int cols = sheet.getRow(0).getPhysicalNumberOfCells();
        
        Object[][] data = new Object[rows - 1][cols];
        
        for (int i = 1; i < rows; i++) {
            Row row = sheet.getRow(i);
            for (int j = 0; j < cols; j++) {
                data[i - 1][j] = row.getCell(j).toString();
            }
        }
        workbook.close();
        return data;
    }
}
\`\`\`

Approach 3: Using Apache Commons CSV:
\`\`\`java
public class CSVDataReader {
    public static List<Map<String, String>> readCSV(String filePath) 
            throws IOException {
        List<Map<String, String>> records = new ArrayList<>();
        Reader in = new FileReader(filePath);
        CSVFormat csvFormat = CSVFormat.DEFAULT.withFirstRecordAsHeader();
        CSVParser csvParser = csvFormat.parse(in);
        
        for (CSVRecord record : csvParser) {
            Map<String, String> data = new HashMap<>();
            data.put("username", record.get("username"));
            data.put("password", record.get("password"));
            records.add(data);
        }
        return records;
    }
}
\`\`\`

Approach 4: Using JSON:
\`\`\`java
public class JSONDataReader {
    public static Object[][] readJSON(String filePath) throws Exception {
        JSONArray jsonArray = new JSONArray(
            new String(Files.readAllBytes(Paths.get(filePath)))
        );
        
        Object[][] data = new Object[jsonArray.length()][1];
        for (int i = 0; i < jsonArray.length(); i++) {
            data[i][0] = jsonArray.getJSONObject(i);
        }
        return data;
    }
}
\`\`\`

Best Practices:
- Separate test logic from test data
- Use external data sources (Excel, CSV, JSON)
- Implement proper data validation
- Use meaningful test data
- Document test data scenarios
- Maintain data in version control
- Use parameterized queries for security`,
        relatedTopics: ["Selenium", "Testing", "Data Management"]
    }
];

// ============ COURSE CONTENT ============
const courseContent = {
    1: {
        title: "Java Fundamentals for SDET",
        content: `
            <h3>Java Fundamentals for SDET</h3>
            <p>Master the essentials of Java programming for test automation.</p>
            
            <h4>Lesson 1: Java Basics</h4>
            <ul>
                <li>Data types (int, String, boolean, etc.)</li>
                <li>Variables and operators</li>
                <li>Control flow (if-else, switch, loops)</li>
                <li>Arrays and basic data structures</li>
            </ul>
            
            <h4>Lesson 2: Methods and Functions</h4>
            <ul>
                <li>Method declaration and invocation</li>
                <li>Return types and parameters</li>
                <li>Method overloading</li>
                <li>Static vs instance methods</li>
            </ul>
            
            <h4>Lesson 3: Strings and Collections</h4>
            <ul>
                <li>String manipulation</li>
                <li>ArrayList, HashMap, HashSet</li>
                <li>Iterating over collections</li>
                <li>Sorting and searching</li>
            </ul>
            
            <h4>Lesson 4: Exception Handling</h4>
            <ul>
                <li>Try-catch blocks</li>
                <li>Different exception types</li>
                <li>Custom exceptions</li>
                <li>Finally block</li>
            </ul>
            
            <h4>Lesson 5: File Handling</h4>
            <ul>
                <li>Reading and writing files</li>
                <li>File operations</li>
                <li>BufferedReader and BufferedWriter</li>
            </ul>
        `
    },
    2: {
        title: "OOP Concepts",
        content: `
            <h3>Object-Oriented Programming Concepts</h3>
            <p>Understand the four pillars of OOP essential for test automation.</p>
            
            <h4>Lesson 1: Classes and Objects</h4>
            <ul>
                <li>Creating and instantiating classes</li>
                <li>Constructors and destructors</li>
                <li>Instance and class variables</li>
                <li>this keyword</li>
            </ul>
            
            <h4>Lesson 2: Encapsulation</h4>
            <ul>
                <li>Access modifiers (public, private, protected)</li>
                <li>Getters and setters</li>
                <li>Data hiding</li>
                <li>Information hiding principles</li>
            </ul>
            
            <h4>Lesson 3: Inheritance</h4>
            <ul>
                <li>Parent and child classes</li>
                <li>super keyword</li>
                <li>Method overriding</li>
                <li>Types of inheritance</li>
            </ul>
            
            <h4>Lesson 4: Polymorphism</h4>
            <ul>
                <li>Method overloading</li>
                <li>Method overriding</li>
                <li>Interface implementation</li>
                <li>Abstract classes</li>
            </ul>
            
            <h4>Lesson 5: Abstraction</h4>
            <ul>
                <li>Abstract classes and methods</li>
                <li>Interfaces</li>
                <li>Implementation patterns</li>
            </ul>
        `
    },
    3: {
        title: "Selenium WebDriver Complete",
        content: `
            <h3>Selenium WebDriver Complete Guide</h3>
            <p>Master advanced WebDriver techniques for comprehensive web automation.</p>
            
            <h4>Lesson 1: WebDriver Setup</h4>
            <ul>
                <li>ChromeDriver, FirefoxDriver setup</li>
                <li>WebDriver interface</li>
                <li>Browser capabilities</li>
                <li>DesiredCapabilities</li>
            </ul>
            
            <h4>Lesson 2: Locating Elements</h4>
            <ul>
                <li>ID, Class Name, Tag Name</li>
                <li>CSS Selectors</li>
                <li>XPath expressions</li>
                <li>Link Text and Partial Link Text</li>
            </ul>
            
            <h4>Lesson 3: Waits and Synchronization</h4>
            <ul>
                <li>Implicit waits</li>
                <li>Explicit waits</li>
                <li>Fluent waits</li>
                <li>Expected conditions</li>
            </ul>
            
            <h4>Lesson 4: User Interactions</h4>
            <ul>
                <li>Click, sendKeys, clear operations</li>
                <li>Actions class for advanced interactions</li>
                <li>Drag and drop</li>
                <li>Keyboard and mouse operations</li>
            </ul>
            
            <h4>Lesson 5: Window and Frame Handling</h4>
            <ul>
                <li>Switching windows</li>
                <li>Switching frames and iframes</li>
                <li>Alert handling</li>
                <li>Window management</li>
            </ul>
        `
    },
    4: {
        title: "TestNG Framework",
        content: `
            <h3>Complete TestNG Framework Mastery</h3>
            <p>Learn to structure and organize tests efficiently with TestNG.</p>
            
            <h4>Lesson 1: TestNG Basics</h4>
            <ul>
                <li>TestNG annotations</li>
                <li>Test execution flow</li>
                <li>testng.xml configuration</li>
                <li>Running tests from command line</li>
            </ul>
            
            <h4>Lesson 2: Fixtures and Lifecycle</h4>
            <ul>
                <li>@BeforeSuite, @BeforeTest, @BeforeClass, @BeforeMethod</li>
                <li>@AfterMethod, @AfterClass, @AfterTest, @AfterSuite</li>
                <li>Test lifecycle management</li>
                <li>Setup and teardown best practices</li>
            </ul>
            
            <h4>Lesson 3: Data-Driven Testing</h4>
            <ul>
                <li>@DataProvider annotation</li>
                <li>External data sources</li>
                <li>Multiple test executions</li>
                <li>Dynamic data generation</li>
            </ul>
            
            <h4>Lesson 4: Test Organization</h4>
            <ul>
                <li>Test groups</li>
                <li>Test dependencies</li>
                <li>Test prioritization</li>
                <li>Including and excluding tests</li>
            </ul>
            
            <h4>Lesson 5: Parallel Execution</h4>
            <ul>
                <li>Parallel execution configuration</li>
                <li>Thread safety</li>
                <li>Resource management</li>
                <li>Performance optimization</li>
            </ul>
        `
    },
    5: {
        title: "Page Object Model",
        content: `
            <h3>Page Object Model Design Pattern</h3>
            <p>Design patterns for maintainable and scalable test automation.</p>
            
            <h4>Lesson 1: POM Introduction</h4>
            <ul>
                <li>Why POM matters</li>
                <li>Separation of concerns</li>
                <li>Code reusability</li>
                <li>Maintenance benefits</li>
            </ul>
            
            <h4>Lesson 2: Creating Page Objects</h4>
            <ul>
                <li>Page object structure</li>
                <li>Locator definition</li>
                <li>Method design</li>
                <li>Constructor patterns</li>
            </ul>
            
            <h4>Lesson 3: Page Interactions</h4>
            <ul>
                <li>User-centric methods</li>
                <li>Chaining methods</li>
                <li>Returning page objects</li>
                <li>Error handling in pages</li>
            </ul>
            
            <h4>Lesson 4: Advanced POM</h4>
            <ul>
                <li>Base page class</li>
                <li>Common actions repository</li>
                <li>Page factory pattern</li>
                <li>Inheritance hierarchies</li>
            </ul>
            
            <h4>Lesson 5: Best Practices</h4>
            <ul>
                <li>Naming conventions</li>
                <li>Element organization</li>
                <li>Test organization with POM</li>
                <li>Maintenance strategies</li>
            </ul>
        `
    },
    6: {
        title: "REST API Testing",
        content: `
            <h3>REST API Testing with RestAssured</h3>
            <p>Master API automation using RestAssured framework.</p>
            
            <h4>Lesson 1: API Fundamentals</h4>
            <ul>
                <li>HTTP methods (GET, POST, PUT, DELETE)</li>
                <li>Status codes</li>
                <li>Headers and parameters</li>
                <li>Request and response structure</li>
            </ul>
            
            <h4>Lesson 2: RestAssured Setup</h4>
            <ul>
                <li>RestAssured dependency</li>
                <li>Basic requests</li>
                <li>Response parsing</li>
                <li>Assertions</li>
            </ul>
            
            <h4>Lesson 3: Request Building</h4>
            <ul>
                <li>Query parameters</li>
                <li>Request body</li>
                <li>Headers configuration</li>
                <li>Authentication methods</li>
            </ul>
            
            <h4>Lesson 4: Response Validation</h4>
            <ul>
                <li>Status code verification</li>
                <li>JSON path assertions</li>
                <li>Response body validation</li>
                <li>Header validation</li>
            </ul>
            
            <h4>Lesson 5: Advanced Scenarios</h4>
            <ul>
                <li>Data extraction and reuse</li>
                <li>Chaining API calls</li>
                <li>Error handling</li>
                <li>Performance testing</li>
            </ul>
        `
    },
    7: {
        title: "BDD with Cucumber",
        content: `
            <h3>Behavior-Driven Development with Cucumber</h3>
            <p>Write tests in Gherkin language for better collaboration.</p>
            
            <h4>Lesson 1: BDD Concepts</h4>
            <ul>
                <li>BDD vs TDD vs ATDD</li>
                <li>Behavior specifications</li>
                <li>Collaboration benefits</li>
                <li>Stakeholder involvement</li>
            </ul>
            
            <h4>Lesson 2: Gherkin Syntax</h4>
            <ul>
                <li>Feature files</li>
                <li>Given-When-Then structure</li>
                <li>Scenarios and scenario outlines</li>
                <li>Background and tags</li>
            </ul>
            
            <h4>Lesson 3: Cucumber Setup</h4>
            <ul>
                <li>Dependency configuration</li>
                <li>Feature file organization</li>
                <li>Step definition files</li>
                <li>Runner configuration</li>
            </ul>
            
            <h4>Lesson 4: Step Definitions</h4>
            <ul>
                <li>Writing step definitions</li>
                <li>Regular expressions in steps</li>
                <li>Data table handling</li>
                <li>Hooks (@Before, @After)</li>
            </ul>
            
            <h4>Lesson 5: Best Practices</h4>
            <ul>
                <li>Feature file organization</li>
                <li>Readable scenarios</li>
                <li>Avoiding brittle tests</li>
                <li>Maintenance strategies</li>
            </ul>
        `
    },
    8: {
        title: "Mobile Testing with Appium",
        content: `
            <h3>Mobile Application Testing with Appium</h3>
            <p>Automate iOS and Android applications.</p>
            
            <h4>Lesson 1: Appium Fundamentals</h4>
            <ul>
                <li>Appium architecture</li>
                <li>iOS vs Android testing</li>
                <li>Appium server setup</li>
                <li>Device configuration</li>
            </ul>
            
            <h4>Lesson 2: Mobile Device Setup</h4>
            <ul>
                <li>Android SDK setup</li>
                <li>iOS prerequisites</li>
                <li>Emulator vs real device</li>
                <li>Desired capabilities</li>
            </ul>
            
            <h4>Lesson 3: Mobile Element Locators</h4>
            <ul>
                <li>Accessibility ID</li>
                <li>ID locators</li>
                <li>XPath for mobile</li>
                <li>UIAutomator and XCUITest</li>
            </ul>
            
            <h4>Lesson 4: Mobile Interactions</h4>
            <ul>
                <li>Tap and multi-touch</li>
                <li>Swipe and scroll</li>
                <li>Device rotation</li>
                <li>App lifecycle management</li>
            </ul>
            
            <h4>Lesson 5: Advanced Mobile Testing</h4>
            <ul>
                <li>Network simulation</li>
                <li>Touch ID and Face ID</li>
                <li>Performance monitoring</li>
                <li>Cross-platform testing</li>
            </ul>
        `
    }
};

// ============ TESTS DATABASE ============
const testsDatabase = {
    1: {
        title: "Java Basics Test",
        questions: [
            {
                question: "What is the output of the following code?\nint x = 5;\nint y = ++x + x++;\nSystem.out.println(x + \" \" + y);",
                options: ["5 11", "6 10", "7 12", "7 11"],
                correct: 2,
                explanation: "++x increments x to 6 first, then uses 6 in the addition. After that, x++ uses 6 and then increments to 7. So y = 6 + 6 = 12. Final output: 7 12"
            },
            {
                question: "Which of the following is NOT a valid way to create a String in Java?",
                options: [
                    'String s = "Hello";',
                    "String s = new String(\"Hello\");",
                    "String s = new String();",
                    "String s = String(\"Hello\");"
                ],
                correct: 3,
                explanation: "String s = String(\"Hello\"); is invalid. You need the 'new' keyword: new String(\"Hello\")."
            }
        ]
    },
    2: {
        title: "Selenium WebDriver Test",
        questions: [
            {
                question: "Which WebDriver method is used to get the current URL?",
                options: [
                    "driver.getUrl()",
                    "driver.getCurrentUrl()",
                    "driver.getPageUrl()",
                    "driver.getLocation()"
                ],
                correct: 1,
                explanation: "getCurrentUrl() is the correct method to retrieve the current URL of the page."
            },
            {
                question: "What exception is thrown when trying to interact with a stale element?",
                options: [
                    "NoSuchElementException",
                    "StaleElementReferenceException",
                    "ElementNotFoundException",
                    "StaleException"
                ],
                correct: 1,
                explanation: "StaleElementReferenceException is thrown when an element reference is no longer valid in the DOM."
            }
        ]
    },
    3: {
        title: "TestNG & Frameworks",
        questions: [
            {
                question: "What does @DataProvider annotation do in TestNG?",
                options: [
                    "Provides external data to test methods",
                    "Configures database connection",
                    "Sets up test data before test execution",
                    "Cleans up test data after execution"
                ],
                correct: 0,
                explanation: "@DataProvider allows you to run a test method multiple times with different data sets."
            },
            {
                question: "Which annotation runs once before all tests in a class?",
                options: [
                    "@BeforeTest",
                    "@BeforeClass",
                    "@BeforeMethod",
                    "@BeforeSuite"
                ],
                correct: 1,
                explanation: "@BeforeClass runs once before all test methods in a class."
            }
        ]
    },
    4: {
        title: "Full Stack SDET Test",
        questions: [
            {
                question: "What is the primary responsibility of an SDET?",
                options: [
                    "Perform manual testing",
                    "Design and develop automation frameworks",
                    "Manage the QA team",
                    "Write production code"
                ],
                correct: 1,
                explanation: "SDETs design and develop test automation frameworks and tools."
            },
            {
                question: "Which design pattern separates test logic from page structure?",
                options: [
                    "Factory Pattern",
                    "Singleton Pattern",
                    "Page Object Model",
                    "Builder Pattern"
                ],
                correct: 2,
                explanation: "Page Object Model (POM) separates test logic from page-specific code."
            },
            {
                question: "What does CI/CD stand for?",
                options: [
                    "Code Integration / Code Deployment",
                    "Continuous Integration / Continuous Deployment",
                    "Continuous Installation / Continuous Distribution",
                    "Code Integration / Continuous Distribution"
                ],
                correct: 1,
                explanation: "CI/CD stands for Continuous Integration and Continuous Deployment/Delivery."
            }
        ]
    }
};

// ============ TAB SWITCHING ============
function switchTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Remove active class from nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    // Show selected tab
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Set active nav link
    const activeLink = document.querySelector(`[data-tab="${tabName}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Load content if needed
    if (tabName === 'practice') {
        loadPracticeQuestions('all');
    } else if (tabName === 'interview') {
        loadInterviewQuestions();
    }
}

// Initialize navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('[data-tab]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tab = this.getAttribute('data-tab');
            switchTab(tab);
        });
    });
});

// ============ PRACTICE QUESTIONS ============
function filterQuestions(type) {
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    loadPracticeQuestions(type);
}

function loadPracticeQuestions(type) {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';

    let questions = [];

    if (type === 'all') {
        questions = [...questionsDatabase.mcq, ...questionsDatabase.coding, ...questionsDatabase.fillblank];
    } else if (type === 'mcq') {
        questions = questionsDatabase.mcq;
    } else if (type === 'coding') {
        questions = questionsDatabase.coding;
    } else if (type === 'fillblank') {
        questions = questionsDatabase.fillblank;
    }

    questions.forEach((question, index) => {
        const card = document.createElement('div');
        card.className = 'question-card';

        let content = `
            <div class="question-header">
                <div>
                    <span class="question-type">${question.type.toUpperCase()}</span>
                    <span class="question-difficulty ${question.difficulty}">${question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}</span>
                </div>
            </div>
            <div class="question-text">${question.question}</div>
        `;

        if (question.type === 'mcq') {
            content += '<div class="question-options">';
            question.options.forEach((option, optIdx) => {
                content += `<label class="option"><input type="radio" name="q${index}" value="${optIdx}"> ${option}</label>`;
            });
            content += '</div>';
        } else if (question.type === 'coding') {
            content += `<textarea placeholder="Write your code here..." style="width: 100%; height: 200px; padding: 10px; font-family: monospace;"></textarea>`;
        } else if (question.type === 'fillblank') {
            content += `<input type="text" placeholder="Fill in the blank..." style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid var(--border-color); border-radius: 4px;">`;
        }

        content += `
            <div class="question-actions">
                <button class="btn btn-primary" onclick="showAnswer(${index}, '${question.type}')">Show Answer</button>
                <button class="btn btn-secondary" onclick="resetQuestion(${index})">Reset</button>
            </div>
        `;

        card.innerHTML = content;
        container.appendChild(card);
    });
}

function showAnswer(questionIndex, type) {
    let questions = [];
    if (type === 'mcq') questions = questionsDatabase.mcq;
    else if (type === 'coding') questions = questionsDatabase.coding;
    else if (type === 'fillblank') questions = questionsDatabase.fillblank;

    const question = questions[questionIndex];
    const modal = document.getElementById('answerModal');
    const answerContent = document.getElementById('answerContent');

    let answerHTML = `
        <h3>Answer & Explanation</h3>
        <div style="background: var(--light-bg); padding: 1rem; border-radius: 6px; margin: 1rem 0;">
            <h4>Question:</h4>
            <p>${question.question}</p>
    `;

    if (type === 'mcq') {
        answerHTML += `
            <h4>Correct Answer:</h4>
            <p><strong>${question.options[question.correct]}</strong></p>
        `;
    } else if (type === 'coding') {
        answerHTML += `
            <h4>Expected Solution:</h4>
            <pre><code>${escapeHtml(question.expectedCode)}</code></pre>
        `;
    } else if (type === 'fillblank') {
        answerHTML += `
            <h4>Correct Answer:</h4>
            <p><strong>${question.blank}</strong></p>
        `;
    }

    answerHTML += `
        </div>
        <div style="background: #d1fae5; padding: 1rem; border-radius: 6px; border-left: 4px solid var(--success);">
            <h4 style="color: var(--success);">Explanation:</h4>
            <p>${question.explanation}</p>
            ${question.tags ? `<p style="margin-top: 1rem;"><strong>Tags:</strong> ${question.tags.join(', ')}</p>` : ''}
        </div>
    `;

    answerContent.innerHTML = answerHTML;
    modal.classList.add('show');
}

function closeAnswerModal() {
    document.getElementById('answerModal').classList.remove('show');
}

function resetQuestion(questionIndex) {
    const cards = document.querySelectorAll('.question-card');
    const inputs = cards[questionIndex].querySelectorAll('input, textarea');
    inputs.forEach(input => {
        if (input.type === 'radio') input.checked = false;
        else input.value = '';
    });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ============ INTERVIEW QUESTIONS ============
function loadInterviewQuestions() {
    const container = document.getElementById('interviewContainer');
    container.innerHTML = '';

    interviewQuestions.forEach((question, index) => {
        const card = document.createElement('div');
        card.className = 'interview-card';

        const difficultyClass = question.difficulty === 'beginner' ? 'easy' : 
                                question.difficulty === 'intermediate' ? 'medium' : 'hard';

        let card_html = `
            <div class="interview-header">
                <div style="flex: 1;">
                    <div class="interview-question" onclick="toggleAnswer(${index})">${question.question}</div>
                    <div class="interview-meta">
                        <span class="interview-badge" style="background: #e0e7ff; color: #3730a3;">${question.topic}</span>
                        <span class="interview-badge" style="background: #fef3c7; color: #92400e;">${question.difficulty}</span>
                        <span style="color: var(--text-light);">Company: ${question.company}</span>
                    </div>
                </div>
            </div>
            <div class="interview-answer" id="answer${index}">
                <h4>Answer:</h4>
                <p>${question.answer.replace(/\n/g, '<br>')}</p>
            </div>
        `;

        card.innerHTML = card_html;
        container.appendChild(card);
    });
}

function toggleAnswer(index) {
    const answer = document.getElementById(`answer${index}`);
    answer.classList.toggle('show');
}

function filterInterviewQuestions() {
    const difficulty = document.getElementById('difficultyFilter').value;
    const topic = document.getElementById('topicFilter').value;

    const container = document.getElementById('interviewContainer');
    const cards = container.querySelectorAll('.interview-card');

    cards.forEach((card, index) => {
        const question = interviewQuestions[index];
        let show = true;

        if (difficulty !== 'all' && question.difficulty !== difficulty) show = false;
        if (topic !== 'all' && question.topic !== topic) show = false;

        card.style.display = show ? 'block' : 'none';
    });
}

// ============ COURSE CONTENT ============
function showCourseContent(courseId) {
    const content = courseContent[courseId];
    if (!content) return;

    const modal = document.getElementById('courseModal');
    document.getElementById('courseTitle').textContent = content.title;
    document.getElementById('courseBody').innerHTML = content.content;
    modal.classList.add('show');
}

function closeCourseModal() {
    document.getElementById('courseModal').classList.remove('show');
}

// ============ TESTS ============
function startTest(testId) {
    const test = testsDatabase[testId];
    if (!test) return;

    const modal = document.getElementById('testModal');
    const testContent = document.getElementById('testContent');

    let html = `<h3>${test.title}</h3>
                <p style="color: var(--text-light);">Total Questions: ${test.questions.length} | Time: 30 minutes</p>
                <hr style="margin: 1rem 0;">`;

    test.questions.forEach((q, index) => {
        html += `
            <div style="margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-color);">
                <p><strong>Question ${index + 1}:</strong> ${q.question}</p>
                <div style="margin: 1rem 0;">
        `;

        q.options.forEach((option, optIndex) => {
            html += `
                <label class="option">
                    <input type="radio" name="test${testId}_q${index}" value="${optIndex}">
                    ${option}
                </label>
            `;
        });

        html += `</div></div>`;
    });

    html += `<div style="margin-top: 2rem;">
                <button class="btn btn-primary" onclick="submitTest(${testId})">Submit Test</button>
                <button class="btn btn-secondary" onclick="closeTestModal()">Cancel</button>
             </div>`;

    testContent.innerHTML = html;
    modal.classList.add('show');
}

function submitTest(testId) {
    const test = testsDatabase[testId];
    let correct = 0;
    let total = test.questions.length;

    test.questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="test${testId}_q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            correct++;
        }
    });

    const percentage = (correct / total) * 100;
    const testContent = document.getElementById('testContent');

    let resultHTML = `
        <div style="text-align: center; padding: 2rem;">
            <h3>Test Results</h3>
            <div style="margin: 2rem 0;">
                <div style="font-size: 3rem; font-weight: bold; color: var(--primary-color);">${percentage.toFixed(1)}%</div>
                <p style="font-size: 1.2rem; margin-top: 1rem;">You scored ${correct} out of ${total} questions correctly</p>
            </div>
    `;

    if (percentage >= 80) {
        resultHTML += `<p style="color: var(--success); font-size: 1.1rem;">✓ Excellent performance! You passed!</p>`;
    } else if (percentage >= 60) {
        resultHTML += `<p style="color: var(--warning); font-size: 1.1rem;">Good effort! Review the concepts and try again.</p>`;
    } else {
        resultHTML += `<p style="color: var(--error); font-size: 1.1rem;">Keep practicing! Review the course material.</p>`;
    }

    resultHTML += `
            <div style="margin-top: 2rem;">
                <button class="btn btn-primary" onclick="closeTestModal()">Close</button>
            </div>
        </div>
    `;

    testContent.innerHTML = resultHTML;
}

function closeTestModal() {
    document.getElementById('testModal').classList.remove('show');
}

// Close modals when clicking outside
window.onclick = function(event) {
    const courseModal = document.getElementById('courseModal');
    const answerModal = document.getElementById('answerModal');
    const testModal = document.getElementById('testModal');

    if (event.target === courseModal) courseModal.classList.remove('show');
    if (event.target === answerModal) answerModal.classList.remove('show');
    if (event.target === testModal) testModal.classList.remove('show');
}

// Initialize on load
window.addEventListener('load', function() {
    switchTab('home');
});
