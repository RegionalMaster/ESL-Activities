// Sample activities database
const activities = [
    {
        id: 1,
        title: "Word Chain Game",
        description: "Students take turns saying words that begin with the last letter of the previous word",
        type: "game",
        ageGroup: "all",
        difficulty: "beginner",
        topics: ["vocabulary", "speaking"],
        duration: "10-15 minutes",
        materials: ["None required"],
        instructions: [
            "First student says any word",
            "Next student must say a word beginning with the last letter of the previous word",
            "Continue until someone can't think of a word or takes too long"
        ]
    },
    {
        id: 2,
        title: "Restaurant Role-play",
        description: "Students practice ordering food and having conversations in a restaurant setting",
        type: "roleplay",
        ageGroup: "teen",
        difficulty: "intermediate",
        topics: ["food", "ordering", "conversation"],
        duration: "20-30 minutes",
        materials: ["Menu templates", "Props (optional)"],
        instructions: [
            "Divide class into customers and waiters",
            "Distribute menus",
            "Practice ordering and serving scenarios"
        ]
    },
    {
        id: 3,
        title: "20 Questions",
        description: "Students practice asking yes/no questions to guess a mystery object",
        type: "game",
        ageGroup: "all",
        difficulty: "beginner",
        topics: ["questions", "vocabulary"],
        duration: "15-20 minutes",
        materials: ["List of objects (optional)"],
        instructions: [
            "One student thinks of an object",
            "Others ask yes/no questions to guess it",
            "Maximum 20 questions allowed"
        ]
    },
    {
        id: 4,
        title: "Daily Routine Charades",
        description: "Students act out and guess daily activities",
        type: "game",
        ageGroup: "young",
        difficulty: "beginner",
        topics: ["daily routines", "verbs"],
        duration: "15-20 minutes",
        materials: ["Activity cards"],
        instructions: [
            "Prepare cards with daily activities",
            "Students take turns acting out activities",
            "Others guess the activity"
        ]
    },
    {
        id: 5,
        title: "News Report",
        description: "Students create and present a news report about recent events",
        type: "group",
        ageGroup: "teen",
        difficulty: "advanced",
        topics: ["current events", "presentation"],
        duration: "30-40 minutes",
        materials: ["News articles", "Paper for scripts"],
        instructions: [
            "Groups choose a news story",
            "Write a script for a news report",
            "Present as news anchors"
        ]
    },
    {
        id: 6,
        title: "Memory Circle",
        description: "Students practice memory and sentence building by adding to a growing list",
        type: "game",
        ageGroup: "all",
        difficulty: "beginner",
        topics: ["vocabulary", "memory"],
        duration: "10-15 minutes",
        materials: ["None required"],
        instructions: [
            "First student says 'I went to the store and bought...' adding an item",
            "Next student repeats the sentence and adds another item",
            "Continue until someone forgets an item"
        ]
    },
    {
        id: 7,
        title: "Weather Report",
        description: "Students practice describing weather conditions and making forecasts",
        type: "roleplay",
        ageGroup: "teen",
        difficulty: "intermediate",
        topics: ["weather", "presentation"],
        duration: "20-25 minutes",
        materials: ["Weather symbols", "World map"],
        instructions: [
            "Students prepare weather forecasts for different cities",
            "Present forecasts like weather reporters",
            "Include temperatures and activities recommendations"
        ]
    },
    {
        id: 8,
        title: "Alphabet Categories",
        description: "Students write words beginning with specific letters in different categories",
        type: "game",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["vocabulary", "writing"],
        duration: "15-20 minutes",
        materials: ["Paper", "Pens", "Timer"],
        instructions: [
            "Choose categories (animals, foods, countries, etc.)",
            "Select a letter",
            "Students write one word per category starting with that letter"
        ]
    },
    {
        id: 9,
        title: "Job Interview Simulation",
        description: "Students practice job interview questions and professional responses",
        type: "roleplay",
        ageGroup: "teen",
        difficulty: "advanced",
        topics: ["professional", "interview"],
        duration: "30-40 minutes",
        materials: ["Job descriptions", "Sample interview questions"],
        instructions: [
            "Pair students as interviewer and interviewee",
            "Provide job descriptions and sample questions",
            "Switch roles after each interview"
        ]
    },
    {
        id: 10,
        title: "Story Chain",
        description: "Students collaboratively create a story one sentence at a time",
        type: "group",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["storytelling", "creativity"],
        duration: "15-20 minutes",
        materials: ["Story prompt cards (optional)"],
        instructions: [
            "First student starts with a sentence",
            "Next student adds a connected sentence",
            "Continue until story reaches natural conclusion"
        ]
    },
    {
        id: 11,
        title: "Shopping Role-play",
        description: "Students practice shopping conversations and transactions",
        type: "roleplay",
        ageGroup: "all",
        difficulty: "beginner",
        topics: ["shopping", "numbers"],
        duration: "20-25 minutes",
        materials: ["Fake money", "Price tags", "Store items"],
        instructions: [
            "Set up mock store with items and prices",
            "Practice customer and shopkeeper roles",
            "Include asking prices, sizes, and making payments"
        ]
    },
    {
        id: 12,
        title: "Taboo Word Game",
        description: "Students describe words without using certain forbidden terms",
        type: "game",
        ageGroup: "teen",
        difficulty: "advanced",
        topics: ["vocabulary", "speaking"],
        duration: "20-30 minutes",
        materials: ["Taboo cards"],
        instructions: [
            "Prepare cards with target words and forbidden terms",
            "Students describe target word without using taboo words",
            "Others guess the word"
        ]
    },
    {
        id: 13,
        title: "Time Travelers",
        description: "Students describe and discuss different time periods",
        type: "roleplay",
        ageGroup: "teen",
        difficulty: "intermediate",
        topics: ["history", "imagination"],
        duration: "25-30 minutes",
        materials: ["Time period cards", "Props (optional)"],
        instructions: [
            "Assign different time periods to groups",
            "Students research/imagine life in that period",
            "Present and interact as time travelers"
        ]
    },
    {
        id: 14,
        title: "Spelling Bee Race",
        description: "Teams compete to spell words correctly",
        type: "game",
        ageGroup: "young",
        difficulty: "beginner",
        topics: ["spelling", "vocabulary"],
        duration: "15-20 minutes",
        materials: ["Word list", "Whiteboard", "Markers"],
        instructions: [
            "Divide class into teams",
            "Say a word",
            "Teams race to write correct spelling"
        ]
    },
    {
        id: 15,
        title: "Cultural Exchange Fair",
        description: "Students present aspects of different cultures",
        type: "group",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["culture", "presentation"],
        duration: "45-60 minutes",
        materials: ["Cultural items", "Presentation materials"],
        instructions: [
            "Assign different cultures to groups",
            "Research food, customs, and traditions",
            "Create interactive presentations"
        ]
    },
    {
        id: 16,
        title: "Sports Commentary",
        description: "Students practice sports vocabulary by commentating on sports clips",
        type: "roleplay",
        ageGroup: "teen",
        difficulty: "intermediate",
        topics: ["sports", "speaking"],
        duration: "25-30 minutes",
        materials: ["Sports video clips", "Sports vocabulary list"],
        instructions: [
            "Watch a short sports clip without sound",
            "Students provide live commentary",
            "Others give feedback on vocabulary use"
        ]
    },
    {
        id: 17,
        title: "Tech Support Heroes",
        description: "Students practice explaining technical problems and solutions",
        type: "roleplay",
        ageGroup: "teen",
        difficulty: "intermediate",
        topics: ["technology", "problem-solving"],
        duration: "20-25 minutes",
        materials: ["Tech problem scenario cards"],
        instructions: [
            "One student is tech support, other is customer",
            "Customer describes a tech problem",
            "Tech support must understand and suggest solutions"
        ]
    },
    {
        id: 18,
        title: "Animal Guess Who",
        description: "Students practice animal descriptions and yes/no questions",
        type: "game",
        ageGroup: "young",
        difficulty: "beginner",
        topics: ["animals", "questions"],
        duration: "15-20 minutes",
        materials: ["Animal picture cards"],
        instructions: [
            "Each student gets an animal card",
            "Others ask yes/no questions about the animal",
            "Try to guess the animal in fewer questions"
        ]
    },
    {
        id: 19,
        title: "Music Mood Board",
        description: "Students describe emotions and feelings through music",
        type: "group",
        ageGroup: "teen",
        difficulty: "intermediate",
        topics: ["music", "emotions"],
        duration: "30-35 minutes",
        materials: ["Music clips", "Emotion vocabulary list"],
        instructions: [
            "Play different music clips",
            "Students describe emotions they feel",
            "Discuss why the music creates those feelings"
        ]
    },
    {
        id: 20,
        title: "Family Tree Detective",
        description: "Students practice family vocabulary by solving family mysteries",
        type: "game",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["family", "problem-solving"],
        duration: "25-30 minutes",
        materials: ["Family tree diagrams", "Relationship clues"],
        instructions: [
            "Provide family tree with missing information",
            "Give clues about relationships",
            "Students solve who belongs where"
        ]
    },
    {
        id: 21,
        title: "Travel Vlogger",
        description: "Students create travel video blogs about destinations",
        type: "group",
        ageGroup: "teen",
        difficulty: "advanced",
        topics: ["travel", "presentation"],
        duration: "40-45 minutes",
        materials: ["Travel brochures", "Presentation materials"],
        instructions: [
            "Choose a destination to present",
            "Research key attractions and tips",
            "Present as a travel vlogger"
        ]
    },
    {
        id: 22,
        title: "Health Habits Survey",
        description: "Students interview each other about healthy lifestyle habits",
        type: "group",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["health", "interview"],
        duration: "25-30 minutes",
        materials: ["Survey forms", "Health vocabulary list"],
        instructions: [
            "Create health habit survey questions",
            "Interview multiple classmates",
            "Present findings to the class"
        ]
    },
    {
        id: 23,
        title: "Recipe Show",
        description: "Students present cooking demonstrations",
        type: "presentation",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["food", "instructions"],
        duration: "30-35 minutes",
        materials: ["Recipe cards", "Cooking vocabulary"],
        instructions: [
            "Choose a simple recipe to present",
            "Explain ingredients and steps",
            "Use cooking vocabulary and time expressions"
        ]
    },
    {
        id: 24,
        title: "Emotion Charades",
        description: "Students act out and guess different emotions",
        type: "game",
        ageGroup: "young",
        difficulty: "beginner",
        topics: ["emotions", "vocabulary"],
        duration: "15-20 minutes",
        materials: ["Emotion cards"],
        instructions: [
            "Pick an emotion card",
            "Act out the emotion without words",
            "Others guess the emotion"
        ]
    },
    {
        id: 25,
        title: "Nature Documentary",
        description: "Students create and present nature documentaries",
        type: "group",
        ageGroup: "all",
        difficulty: "advanced",
        topics: ["nature", "presentation"],
        duration: "35-40 minutes",
        materials: ["Nature images/videos", "Script template"],
        instructions: [
            "Choose a natural phenomenon or animal",
            "Research and write documentary script",
            "Present with appropriate tone and style"
        ]
    },
    {
        id: 26,
        title: "Movie Critic",
        description: "Students review and discuss movies using critical vocabulary",
        type: "discussion",
        ageGroup: "teen",
        difficulty: "intermediate",
        topics: ["entertainment", "opinion"],
        duration: "25-30 minutes",
        materials: ["Movie review template", "Rating system"],
        instructions: [
            "Watch short movie clips",
            "Write brief reviews using template",
            "Present and defend opinions"
        ]
    },
    {
        id: 27,
        title: "Future City Planners",
        description: "Students design and present their ideal future city",
        type: "project",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["environment", "creativity"],
        duration: "40-45 minutes",
        materials: ["Drawing materials", "City vocabulary list"],
        instructions: [
            "Design a future city with specific features",
            "Label different areas and explain purposes",
            "Present city plans to the class"
        ]
    },
    {
        id: 28,
        title: "Hobby Show and Tell",
        description: "Students present their hobbies and teach a simple skill",
        type: "presentation",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["hobbies", "instructions"],
        duration: "30-35 minutes",
        materials: ["Hobby items", "Instruction vocabulary"],
        instructions: [
            "Bring items related to hobby",
            "Explain hobby and demonstrate skill",
            "Teach others a simple aspect"
        ]
    },
    {
        id: 29,
        title: "Transportation Adventure",
        description: "Students plan and explain travel routes using different transport",
        type: "problem-solving",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["transport", "directions"],
        duration: "25-30 minutes",
        materials: ["City maps", "Transport cards"],
        instructions: [
            "Provide destination and starting point",
            "Plan route using multiple transport types",
            "Explain journey to others"
        ]
    },
    {
        id: 30,
        title: "Social Media Influencer",
        description: "Students create and present social media content",
        type: "project",
        ageGroup: "teen",
        difficulty: "advanced",
        topics: ["technology", "creativity"],
        duration: "35-40 minutes",
        materials: ["Social media templates", "Content ideas"],
        instructions: [
            "Choose topic for social media channel",
            "Create sample posts and captions",
            "Present content strategy"
        ]
    },
    {
        id: 31,
        title: "Science Experiment Show",
        description: "Students explain and demonstrate simple science experiments",
        type: "presentation",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["science", "instructions"],
        duration: "30-35 minutes",
        materials: ["Simple experiment materials", "Safety equipment"],
        instructions: [
            "Choose a simple science experiment",
            "Explain hypothesis and procedure",
            "Demonstrate and explain results"
        ]
    },
    {
        id: 32,
        title: "Fashion Show Commentary",
        description: "Students describe clothing and fashion choices",
        type: "roleplay",
        ageGroup: "teen",
        difficulty: "intermediate",
        topics: ["fashion", "description"],
        duration: "25-30 minutes",
        materials: ["Clothing items", "Fashion vocabulary list"],
        instructions: [
            "Students bring different outfits",
            "Take turns being models and commentators",
            "Describe styles, colors, and patterns"
        ]
    },
    {
        id: 33,
        title: "Dream Job Interview",
        description: "Students interview each other about ideal future careers",
        type: "roleplay",
        ageGroup: "teen",
        difficulty: "intermediate",
        topics: ["careers", "interview"],
        duration: "20-25 minutes",
        materials: ["Job description cards", "Interview question list"],
        instructions: [
            "Students choose dream jobs",
            "Prepare interview questions",
            "Conduct interviews in pairs"
        ]
    },
    {
        id: 34,
        title: "Holiday Traditions Fair",
        description: "Students present different holiday traditions from around the world",
        type: "presentation",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["holidays", "culture"],
        duration: "40-45 minutes",
        materials: ["Holiday props", "Cultural items"],
        instructions: [
            "Research a holiday tradition",
            "Create visual presentation",
            "Present and explain significance"
        ]
    },
    {
        id: 35,
        title: "Movie Trailer Creation",
        description: "Students create and present movie trailers for imaginary films",
        type: "group",
        ageGroup: "teen",
        difficulty: "advanced",
        topics: ["movies", "creativity"],
        duration: "45-50 minutes",
        materials: ["Props", "Script template"],
        instructions: [
            "Develop movie concept",
            "Write and rehearse scenes",
            "Present trailer to class"
        ]
    },
    {
        id: 36,
        title: "Book Club Discussion",
        description: "Students discuss short stories or book excerpts",
        type: "discussion",
        ageGroup: "teen",
        difficulty: "advanced",
        topics: ["literature", "discussion"],
        duration: "30-35 minutes",
        materials: ["Short story copies", "Discussion questions"],
        instructions: [
            "Read short story together",
            "Discuss plot and characters",
            "Share personal opinions"
        ]
    },
    {
        id: 37,
        title: "Art Gallery Guide",
        description: "Students present and describe artwork",
        type: "presentation",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["art", "description"],
        duration: "25-30 minutes",
        materials: ["Art prints", "Description vocabulary"],
        instructions: [
            "Select artwork to present",
            "Prepare description",
            "Guide others through gallery"
        ]
    },
    {
        id: 38,
        title: "Market Mathematics",
        description: "Students practice numbers and calculations in shopping scenarios",
        type: "game",
        ageGroup: "all",
        difficulty: "beginner",
        topics: ["numbers", "shopping"],
        duration: "20-25 minutes",
        materials: ["Play money", "Price tags", "Calculator"],
        instructions: [
            "Set up mock store",
            "Practice making purchases",
            "Calculate change and discounts"
        ]
    },
    {
        id: 39,
        title: "Emergency Response",
        description: "Students practice vocabulary and responses for emergency situations",
        type: "roleplay",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["emergency", "safety"],
        duration: "25-30 minutes",
        materials: ["Emergency scenario cards", "Props"],
        instructions: [
            "Present emergency scenario",
            "Practice appropriate responses",
            "Learn emergency vocabulary"
        ]
    },
    {
        id: 40,
        title: "Environmental News Report",
        description: "Students create news reports about environmental issues",
        type: "presentation",
        ageGroup: "teen",
        difficulty: "advanced",
        topics: ["environment", "news"],
        duration: "35-40 minutes",
        materials: ["Environmental articles", "News script template"],
        instructions: [
            "Research environmental issue",
            "Write news report script",
            "Present as news team"
        ]
    },
    {
        id: 41,
        title: "Invention Pitch",
        description: "Students present innovative solutions to everyday problems",
        type: "presentation",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["innovation", "persuasion"],
        duration: "30-35 minutes",
        materials: ["Drawing materials", "Presentation template"],
        instructions: [
            "Identify problem to solve",
            "Design creative solution",
            "Pitch invention to class"
        ]
    },
    {
        id: 42,
        title: "Weather Warning",
        description: "Students practice giving weather warnings and safety advice",
        type: "roleplay",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["weather", "safety"],
        duration: "20-25 minutes",
        materials: ["Weather scenario cards", "Safety tip cards"],
        instructions: [
            "Present extreme weather scenario",
            "Announce warnings",
            "Give safety instructions"
        ]
    },
    {
        id: 43,
        title: "Digital Device Tutorial",
        description: "Students explain how to use different digital devices",
        type: "presentation",
        ageGroup: "teen",
        difficulty: "intermediate",
        topics: ["technology", "instructions"],
        duration: "25-30 minutes",
        materials: ["Device pictures", "Tech vocabulary"],
        instructions: [
            "Choose digital device",
            "Explain features and functions",
            "Demonstrate common tasks"
        ]
    },
    {
        id: 44,
        title: "Sports Rules Explanation",
        description: "Students explain rules and demonstrate sports",
        type: "presentation",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["sports", "instructions"],
        duration: "25-30 minutes",
        materials: ["Sports equipment", "Rule cards"],
        instructions: [
            "Choose a sport",
            "Explain basic rules",
            "Demonstrate key moves"
        ]
    },
    {
        id: 45,
        title: "Restaurant Review",
        description: "Students write and present restaurant reviews",
        type: "writing",
        ageGroup: "teen",
        difficulty: "intermediate",
        topics: ["food", "opinion"],
        duration: "30-35 minutes",
        materials: ["Review template", "Restaurant photos"],
        instructions: [
            "Study restaurant information",
            "Write detailed review",
            "Present recommendations"
        ]
    },
    {
        id: 46,
        title: "Social Media Challenge",
        description: "Students create engaging social media content",
        type: "project",
        ageGroup: "teen",
        difficulty: "intermediate",
        topics: ["social media", "creativity"],
        duration: "35-40 minutes",
        materials: ["Social media templates", "Hashtag list"],
        instructions: [
            "Choose content theme",
            "Create engaging posts",
            "Present engagement strategy"
        ]
    },
    {
        id: 47,
        title: "Space Explorer",
        description: "Students present about space exploration and astronomy",
        type: "presentation",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["space", "science"],
        duration: "30-35 minutes",
        materials: ["Space images", "Astronomy facts"],
        instructions: [
            "Research space topic",
            "Prepare visual presentation",
            "Present discoveries"
        ]
    },
    {
        id: 48,
        title: "Historical Time Travel",
        description: "Students roleplay characters from different time periods",
        type: "roleplay",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["history", "roleplay"],
        duration: "35-40 minutes",
        materials: ["Period costumes", "Historical fact cards"],
        instructions: [
            "Choose historical period",
            "Research character",
            "Act in character"
        ]
    },
    {
        id: 49,
        title: "Cooking Show Host",
        description: "Students present cooking demonstrations",
        type: "presentation",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["food", "instructions"],
        duration: "30-35 minutes",
        materials: ["Recipe cards", "Cooking vocabulary"],
        instructions: [
            "Select simple recipe",
            "Explain ingredients and steps",
            "Present cooking demo"
        ]
    },
    {
        id: 50,
        title: "Dream House Design",
        description: "Students design and present their ideal home",
        type: "project",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["architecture", "description"],
        duration: "40-45 minutes",
        materials: ["Drawing materials", "House vocabulary"],
        instructions: [
            "Design dream house",
            "Label rooms and features",
            "Present house tour"
        ]
    },
    {
        id: 51,
        title: "Travel Agency",
        description: "Students plan and sell vacation packages",
        type: "roleplay",
        ageGroup: "teen",
        difficulty: "intermediate",
        topics: ["travel", "sales"],
        duration: "30-35 minutes",
        materials: ["Travel brochures", "Price lists"],
        instructions: [
            "Create vacation package",
            "Present destinations",
            "Practice sales pitch"
        ]
    },
    {
        id: 52,
        title: "Music Festival Planning",
        description: "Students organize a fictional music festival",
        type: "project",
        ageGroup: "teen",
        difficulty: "advanced",
        topics: ["music", "planning"],
        duration: "45-50 minutes",
        materials: ["Festival planning template", "Music genres list"],
        instructions: [
            "Plan festival lineup",
            "Create schedule",
            "Present festival details"
        ]
    },
    {
        id: 53,
        title: "Wildlife Documentary",
        description: "Students create wildlife documentaries",
        type: "presentation",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["wildlife", "nature"],
        duration: "35-40 minutes",
        materials: ["Animal facts", "Documentary script"],
        instructions: [
            "Choose animal species",
            "Research behavior",
            "Present documentary"
        ]
    },
    {
        id: 54,
        title: "Olympics Committee",
        description: "Students plan and present Olympic events",
        type: "project",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["sports", "planning"],
        duration: "40-45 minutes",
        materials: ["Sports cards", "Schedule template"],
        instructions: [
            "Create new Olympic event",
            "Write rules and scoring",
            "Present to committee"
        ]
    },
    {
        id: 55,
        title: "Community Helper",
        description: "Students discuss community roles and responsibilities",
        type: "roleplay",
        ageGroup: "all",
        difficulty: "beginner",
        topics: ["community", "jobs"],
        duration: "25-30 minutes",
        materials: ["Job cards", "Props"],
        instructions: [
            "Choose community role",
            "Explain responsibilities",
            "Demonstrate typical day"
        ]
    },
    {
        id: 56,
        title: "Social Media Influencer Day",
        description: "Students create content for different platforms",
        type: "project",
        ageGroup: "teen",
        difficulty: "intermediate",
        topics: ["social media", "creativity"],
        duration: "35-40 minutes",
        materials: ["Platform templates", "Content ideas"],
        instructions: [
            "Choose platform and niche",
            "Create content calendar",
            "Present sample content"
        ]
    },
    {
        id: 57,
        title: "Space Station Design",
        description: "Students design future space habitats",
        type: "project",
        ageGroup: "all",
        difficulty: "advanced",
        topics: ["space", "design"],
        duration: "45-50 minutes",
        materials: ["Drawing materials", "Space vocabulary"],
        instructions: [
            "Design space station",
            "Label features",
            "Present living conditions"
        ]
    },
    {
        id: 58,
        title: "Historical News",
        description: "Students report on historical events",
        type: "roleplay",
        ageGroup: "teen",
        difficulty: "advanced",
        topics: ["history", "news"],
        duration: "35-40 minutes",
        materials: ["Historical events cards", "News script"],
        instructions: [
            "Choose historical event",
            "Write news report",
            "Present breaking news"
        ]
    },
    {
        id: 59,
        title: "Food Critic",
        description: "Students review and describe different cuisines",
        type: "writing",
        ageGroup: "teen",
        difficulty: "intermediate",
        topics: ["food", "opinion"],
        duration: "30-35 minutes",
        materials: ["Food photos", "Review template"],
        instructions: [
            "Study cuisine type",
            "Write food review",
            "Present recommendations"
        ]
    },
    {
        id: 60,
        title: "City Planner",
        description: "Students design and present city improvements",
        type: "project",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["architecture", "planning"],
        duration: "40-45 minutes",
        materials: ["City maps", "Planning vocabulary"],
        instructions: [
            "Identify city problems",
            "Design solutions",
            "Present improvements"
        ]
    },
    {
        id: 61,
        title: "Science Fair Judge",
        description: "Students evaluate and discuss science experiments",
        type: "roleplay",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["science", "evaluation"],
        duration: "40-45 minutes",
        materials: ["Experiment cards", "Evaluation forms"],
        instructions: [
            "Review experiment proposals",
            "Ask questions about methods",
            "Provide constructive feedback"
        ]
    },
    {
        id: 62,
        title: "Business Shark Tank",
        description: "Students pitch business ideas to investors",
        type: "presentation",
        ageGroup: "teen",
        difficulty: "advanced",
        topics: ["business", "persuasion"],
        duration: "45-50 minutes",
        materials: ["Business plan template", "Financial vocabulary"],
        instructions: [
            "Develop business idea",
            "Create pitch presentation",
            "Answer investor questions"
        ]
    },
    {
        id: 63,
        title: "Craft Workshop Host",
        description: "Students teach others how to make crafts",
        type: "presentation",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["crafts", "instructions"],
        duration: "35-40 minutes",
        materials: ["Craft supplies", "Step-by-step guide"],
        instructions: [
            "Choose simple craft project",
            "Demonstrate techniques",
            "Guide others through process"
        ]
    },
    {
        id: 64,
        title: "Grammar Detective",
        description: "Students find and correct language errors",
        type: "game",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["grammar", "correction"],
        duration: "25-30 minutes",
        materials: ["Error cards", "Grammar rules"],
        instructions: [
            "Find grammar mistakes",
            "Explain corrections",
            "Practice proper usage"
        ]
    },
    {
        id: 65,
        title: "Festival Organizer",
        description: "Students plan cultural celebration events",
        type: "project",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["culture", "planning"],
        duration: "40-45 minutes",
        materials: ["Event planning template", "Cultural information"],
        instructions: [
            "Choose cultural festival",
            "Plan activities and food",
            "Present festival schedule"
        ]
    },
    {
        id: 66,
        title: "Life Coach",
        description: "Students practice giving advice and motivation",
        type: "roleplay",
        ageGroup: "teen",
        difficulty: "intermediate",
        topics: ["personal development", "advice"],
        duration: "30-35 minutes",
        materials: ["Scenario cards", "Goal-setting worksheets"],
        instructions: [
            "Discuss life challenges",
            "Provide helpful advice",
            "Set achievable goals"
        ]
    },
    {
        id: 67,
        title: "Eco-Warrior Project",
        description: "Students create environmental awareness campaigns",
        type: "project",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["environment", "activism"],
        duration: "45-50 minutes",
        materials: ["Campaign materials", "Environmental facts"],
        instructions: [
            "Choose environmental issue",
            "Design awareness campaign",
            "Present solution ideas"
        ]
    },
    {
        id: 68,
        title: "Tech Review Show",
        description: "Students review and compare digital products",
        type: "presentation",
        ageGroup: "teen",
        difficulty: "intermediate",
        topics: ["technology", "comparison"],
        duration: "30-35 minutes",
        materials: ["Product cards", "Review template"],
        instructions: [
            "Compare product features",
            "Evaluate pros and cons",
            "Make recommendations"
        ]
    },
    {
        id: 69,
        title: "Fitness Trainer",
        description: "Students lead exercise routines and give health tips",
        type: "roleplay",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["fitness", "instructions"],
        duration: "25-30 minutes",
        materials: ["Exercise cards", "Health vocabulary"],
        instructions: [
            "Plan workout routine",
            "Demonstrate exercises",
            "Give safety instructions"
        ]
    },
    {
        id: 70,
        title: "World Tour Guide",
        description: "Students present about different countries and cultures",
        type: "presentation",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["geography", "culture"],
        duration: "35-40 minutes",
        materials: ["World maps", "Cultural fact cards"],
        instructions: [
            "Choose country to present",
            "Research key information",
            "Give cultural tour"
        ]
    },
    {
        id: 71,
        title: "Lab Report Presentation",
        description: "Students present scientific findings",
        type: "presentation",
        ageGroup: "teen",
        difficulty: "advanced",
        topics: ["science", "research"],
        duration: "35-40 minutes",
        materials: ["Lab report template", "Scientific vocabulary"],
        instructions: [
            "Conduct simple experiment",
            "Record observations",
            "Present findings"
        ]
    },
    {
        id: 72,
        title: "Market Analysis",
        description: "Students analyze and present market trends",
        type: "presentation",
        ageGroup: "teen",
        difficulty: "advanced",
        topics: ["business", "analysis"],
        duration: "40-45 minutes",
        materials: ["Market data", "Analysis template"],
        instructions: [
            "Research market sector",
            "Identify trends",
            "Present conclusions"
        ]
    },
    {
        id: 73,
        title: "DIY Tutorial Creator",
        description: "Students create and present craft tutorials",
        type: "presentation",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["crafts", "instructions"],
        duration: "30-35 minutes",
        materials: ["Craft supplies", "Tutorial template"],
        instructions: [
            "Choose DIY project",
            "Plan tutorial steps",
            "Present instructions"
        ]
    },
    {
        id: 74,
        title: "Language Evolution",
        description: "Students explore how language changes over time",
        type: "discussion",
        ageGroup: "teen",
        difficulty: "advanced",
        topics: ["language", "history"],
        duration: "35-40 minutes",
        materials: ["Word origin cards", "Timeline template"],
        instructions: [
            "Research word origins",
            "Track language changes",
            "Present findings"
        ]
    },
    {
        id: 75,
        title: "Cultural Ambassador",
        description: "Students represent and share cultural traditions",
        type: "presentation",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["culture", "presentation"],
        duration: "40-45 minutes",
        materials: ["Cultural items", "Presentation guide"],
        instructions: [
            "Choose cultural aspect",
            "Prepare presentation",
            "Share traditions"
        ]
    },
    {
        id: 76,
        title: "TED Talk Speaker",
        description: "Students deliver inspiring presentations",
        type: "presentation",
        ageGroup: "teen",
        difficulty: "advanced",
        topics: ["public speaking", "inspiration"],
        duration: "40-45 minutes",
        materials: ["Presentation template", "Topic cards"],
        instructions: [
            "Choose inspiring topic",
            "Prepare presentation",
            "Deliver talk with confidence"
        ]
    },
    {
        id: 77,
        title: "Mystery Solver",
        description: "Students solve puzzles and riddles in English",
        type: "game",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["problem solving", "deduction"],
        duration: "30-35 minutes",
        materials: ["Mystery cards", "Clue sheets"],
        instructions: [
            "Present mystery scenario",
            "Gather and analyze clues",
            "Present solution"
        ]
    },
    {
        id: 78,
        title: "Short Story Writer",
        description: "Students create and share original stories",
        type: "writing",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["creative writing", "storytelling"],
        duration: "45-50 minutes",
        materials: ["Story prompts", "Writing template"],
        instructions: [
            "Choose story prompt",
            "Write creative story",
            "Share with class"
        ]
    },
    {
        id: 79,
        title: "Podcast Producer",
        description: "Students create and record podcast episodes",
        type: "project",
        ageGroup: "teen",
        difficulty: "advanced",
        topics: ["media", "discussion"],
        duration: "50-55 minutes",
        materials: ["Recording equipment", "Script template"],
        instructions: [
            "Choose podcast topic",
            "Write episode script",
            "Record and present"
        ]
    },
    {
        id: 80,
        title: "Fashion Designer",
        description: "Students design and present clothing collections",
        type: "project",
        ageGroup: "teen",
        difficulty: "intermediate",
        topics: ["fashion", "creativity"],
        duration: "40-45 minutes",
        materials: ["Design templates", "Fashion magazines"],
        instructions: [
            "Create design concept",
            "Sketch outfits",
            "Present collection"
        ]
    },
    {
        id: 81,
        title: "Behavior Analyst",
        description: "Students discuss and analyze human behavior",
        type: "discussion",
        ageGroup: "teen",
        difficulty: "advanced",
        topics: ["psychology", "analysis"],
        duration: "35-40 minutes",
        materials: ["Scenario cards", "Analysis worksheet"],
        instructions: [
            "Study behavior scenario",
            "Analyze motivations",
            "Present conclusions"
        ]
    },
    {
        id: 82,
        title: "Future Tech Inventor",
        description: "Students imagine and present future technologies",
        type: "project",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["technology", "innovation"],
        duration: "45-50 minutes",
        materials: ["Design templates", "Tech vocabulary"],
        instructions: [
            "Brainstorm future tech",
            "Design prototype",
            "Present invention"
        ]
    },
    {
        id: 83,
        title: "Community Project Manager",
        description: "Students plan local community improvements",
        type: "project",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["community", "planning"],
        duration: "40-45 minutes",
        materials: ["Project template", "Community maps"],
        instructions: [
            "Identify community need",
            "Plan improvement project",
            "Present proposal"
        ]
    },
    {
        id: 84,
        title: "Global Issues Debate",
        description: "Students discuss and debate world problems",
        type: "discussion",
        ageGroup: "teen",
        difficulty: "advanced",
        topics: ["global issues", "debate"],
        duration: "45-50 minutes",
        materials: ["Topic cards", "Debate guidelines"],
        instructions: [
            "Research global issue",
            "Prepare arguments",
            "Participate in debate"
        ]
    },
    {
        id: 85,
        title: "Time Management Coach",
        description: "Students teach effective time management",
        type: "presentation",
        ageGroup: "teen",
        difficulty: "intermediate",
        topics: ["time management", "advice"],
        duration: "30-35 minutes",
        materials: ["Schedule templates", "Time management tips"],
        instructions: [
            "Create daily schedule",
            "Explain strategies",
            "Share productivity tips"
        ]
    },
    {
        id: 86,
        title: "Speech Contest Judge",
        description: "Students evaluate and provide feedback on speeches",
        type: "roleplay",
        ageGroup: "teen",
        difficulty: "advanced",
        topics: ["public speaking", "evaluation"],
        duration: "45-50 minutes",
        materials: ["Evaluation forms", "Speech criteria"],
        instructions: [
            "Listen to speeches",
            "Take detailed notes",
            "Provide constructive feedback"
        ]
    },
    {
        id: 87,
        title: "Escape Room Designer",
        description: "Students create language-based puzzle rooms",
        type: "project",
        ageGroup: "all",
        difficulty: "advanced",
        topics: ["problem solving", "creativity"],
        duration: "50-55 minutes",
        materials: ["Puzzle templates", "Room layout sheets"],
        instructions: [
            "Design puzzle sequence",
            "Create clues and solutions",
            "Test puzzle flow"
        ]
    },
    {
        id: 88,
        title: "Poetry Slam Host",
        description: "Students write and perform original poems",
        type: "performance",
        ageGroup: "teen",
        difficulty: "intermediate",
        topics: ["creative writing", "performance"],
        duration: "40-45 minutes",
        materials: ["Poetry prompts", "Performance tips"],
        instructions: [
            "Write original poem",
            "Practice performance",
            "Present to audience"
        ]
    },
    {
        id: 89,
        title: "Documentary Filmmaker",
        description: "Students create short documentary films",
        type: "project",
        ageGroup: "teen",
        difficulty: "advanced",
        topics: ["media", "storytelling"],
        duration: "55-60 minutes",
        materials: ["Recording equipment", "Storyboard template"],
        instructions: [
            "Choose documentary topic",
            "Plan and film content",
            "Edit and present"
        ]
    },
    {
        id: 90,
        title: "Style Consultant",
        description: "Students give fashion and style advice",
        type: "roleplay",
        ageGroup: "teen",
        difficulty: "intermediate",
        topics: ["fashion", "advice"],
        duration: "35-40 minutes",
        materials: ["Style guides", "Fashion vocabulary"],
        instructions: [
            "Analyze style needs",
            "Suggest improvements",
            "Present makeover plan"
        ]
    },
    {
        id: 91,
        title: "VR Experience Designer",
        description: "Students design virtual reality experiences",
        type: "project",
        ageGroup: "teen",
        difficulty: "advanced",
        topics: ["virtual reality", "creativity"],
        duration: "50-55 minutes",
        materials: ["VR concept templates", "Tech vocabulary"],
        instructions: [
            "Design virtual environment",
            "Plan user interactions",
            "Present VR experience"
        ]
    },
    {
        id: 92,
        title: "Social Skills Workshop",
        description: "Students practice interpersonal communication",
        type: "roleplay",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["social skills", "communication"],
        duration: "35-40 minutes",
        materials: ["Scenario cards", "Communication tips"],
        instructions: [
            "Practice social scenarios",
            "Give and receive feedback",
            "Discuss improvement strategies"
        ]
    },
    {
        id: 93,
        title: "Leadership Challenge",
        description: "Students lead team activities and projects",
        type: "project",
        ageGroup: "teen",
        difficulty: "advanced",
        topics: ["leadership", "teamwork"],
        duration: "45-50 minutes",
        materials: ["Project cards", "Leadership guide"],
        instructions: [
            "Assign team roles",
            "Lead group activity",
            "Evaluate team performance"
        ]
    },
    {
        id: 94,
        title: "Disaster Response Team",
        description: "Students plan emergency responses",
        type: "roleplay",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["natural disasters", "safety"],
        duration: "40-45 minutes",
        materials: ["Emergency scenario cards", "Response templates"],
        instructions: [
            "Analyze disaster scenario",
            "Create response plan",
            "Present safety procedures"
        ]
    },
    {
        id: 95,
        title: "Urban Development Planner",
        description: "Students design city improvements",
        type: "project",
        ageGroup: "teen",
        difficulty: "advanced",
        topics: ["urban life", "planning"],
        duration: "45-50 minutes",
        materials: ["City maps", "Development plans"],
        instructions: [
            "Identify urban challenges",
            "Design solutions",
            "Present development plan"
        ]
    },
    {
        id: 96,
        title: "Mindfulness Guide",
        description: "Students lead relaxation and mindfulness sessions",
        type: "presentation",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["mindfulness", "wellness"],
        duration: "30-35 minutes",
        materials: ["Meditation scripts", "Relaxation tips"],
        instructions: [
            "Learn mindfulness techniques",
            "Practice guided meditation",
            "Lead relaxation session"
        ]
    },
    {
        id: 97,
        title: "Team Building Coach",
        description: "Students organize team building activities",
        type: "project",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["teambuilding", "leadership"],
        duration: "40-45 minutes",
        materials: ["Activity cards", "Team evaluation forms"],
        instructions: [
            "Select team activities",
            "Lead group exercises",
            "Discuss team dynamics"
        ]
    },
    {
        id: 98,
        title: "Career Path Advisor",
        description: "Students provide career guidance and planning",
        type: "roleplay",
        ageGroup: "teen",
        difficulty: "intermediate",
        topics: ["career planning", "advice"],
        duration: "35-40 minutes",
        materials: ["Career cards", "Planning worksheets"],
        instructions: [
            "Discuss career options",
            "Create career plan",
            "Present career path"
        ]
    },
    {
        id: 99,
        title: "Digital Artist",
        description: "Students create digital artwork and explain process",
        type: "project",
        ageGroup: "teen",
        difficulty: "intermediate",
        topics: ["digital art", "creativity"],
        duration: "45-50 minutes",
        materials: ["Digital tools", "Art vocabulary"],
        instructions: [
            "Choose art style",
            "Create digital artwork",
            "Present creative process"
        ]
    },
    {
        id: 100,
        title: "Event Planning Expert",
        description: "Students plan and present event proposals",
        type: "project",
        ageGroup: "all",
        difficulty: "intermediate",
        topics: ["event planning", "organization"],
        duration: "40-45 minutes",
        materials: ["Event planning template", "Budget worksheet"],
        instructions: [
            "Choose event type",
            "Create detailed plan",
            "Present event proposal"
        ]
    }
];

// Updated topics database
const topics = [
    {
        id: 1,
        name: "Food and Dining",
        activities: [2, 23, 45],
        icon: "🍽️"
    },
    {
        id: 2,
        name: "Vocabulary Building",
        activities: [1, 3, 6, 8, 12],
        icon: "📚"
    },
    {
        id: 3,
        name: "Daily Activities",
        activities: [4],
        icon: "⏰"
    },
    {
        id: 4,
        name: "Current Events",
        activities: [5],
        icon: "📰"
    },
    {
        id: 5,
        name: "Weather and Environment",
        activities: [7, 27, 40, 42],
        icon: "🌤️"
    },
    {
        id: 6,
        name: "Professional Skills",
        activities: [9, 17],
        icon: "💼"
    },
    {
        id: 7,
        name: "Storytelling",
        activities: [10, 13],
        icon: "📖"
    },
    {
        id: 8,
        name: "Shopping and Money",
        activities: [11, 38],
        icon: "🛍️"
    },
    {
        id: 9,
        name: "Culture and Traditions",
        activities: [15, 34],
        icon: "🌎"
    },
    {
        id: 10,
        name: "Sports and Fitness",
        activities: [16, 44],
        icon: "⚽"
    },
    {
        id: 11,
        name: "Technology and Modern Life",
        activities: [17, 30, 43],
        icon: "💻"
    },
    {
        id: 12,
        name: "Animals and Nature",
        activities: [18, 25],
        icon: "🦁"
    },
    {
        id: 13,
        name: "Music and Entertainment",
        activities: [19, 26, 35],
        icon: "🎵"
    },
    {
        id: 14,
        name: "Family and Relationships",
        activities: [20],
        icon: "👨‍👩‍👧‍👦"
    },
    {
        id: 15,
        name: "Travel and Transportation",
        activities: [21, 29],
        icon: "✈️"
    },
    {
        id: 16,
        name: "Health and Wellness",
        activities: [22],
        icon: "🏥"
    },
    {
        id: 17,
        name: "Emotions and Feelings",
        activities: [24],
        icon: "😊"
    },
    {
        id: 18,
        name: "Hobbies and Free Time",
        activities: [28],
        icon: "🎨"
    },
    {
        id: 19,
        name: "Science and Innovation",
        activities: [31, 41],
        icon: "🔬"
    },
    {
        id: 20,
        name: "Fashion and Style",
        activities: [32],
        icon: "👗"
    },
    {
        id: 21,
        name: "Jobs and Careers",
        activities: [33],
        icon: "💼"
    },
    {
        id: 22,
        name: "Holidays and Celebrations",
        activities: [34],
        icon: "🎉"
    },
    {
        id: 23,
        name: "Movies and TV",
        activities: [35],
        icon: "🎬"
    },
    {
        id: 24,
        name: "Books and Literature",
        activities: [36],
        icon: "📚"
    },
    {
        id: 25,
        name: "Art and Design",
        activities: [37],
        icon: "🎨"
    },
    {
        id: 26,
        name: "Numbers and Mathematics",
        activities: [38],
        icon: "🔢"
    },
    {
        id: 27,
        name: "Safety and Emergencies",
        activities: [39],
        icon: "🚨"
    },
    {
        id: 28,
        name: "Social Media and Communication",
        activities: [46, 56],
        icon: "📱"
    },
    {
        id: 29,
        name: "Space and Astronomy",
        activities: [47, 57],
        icon: "🚀"
    },
    {
        id: 30,
        name: "History and Time Periods",
        activities: [48, 58],
        icon: "⏳"
    },
    {
        id: 31,
        name: "Food and Cooking",
        activities: [49, 59],
        icon: "👨‍🍳"
    },
    {
        id: 32,
        name: "Architecture and Buildings",
        activities: [50, 60],
        icon: "🏛️"
    },
    {
        id: 33,
        name: "Transportation and Travel",
        activities: [51],
        icon: "🚆"
    },
    {
        id: 34,
        name: "Music and Performance",
        activities: [52],
        icon: "🎸"
    },
    {
        id: 35,
        name: "Wildlife and Conservation",
        activities: [53],
        icon: "🦊"
    },
    {
        id: 36,
        name: "Sports and Games",
        activities: [54],
        icon: "🏅"
    },
    {
        id: 37,
        name: "Community and Society",
        activities: [55],
        icon: "🤝"
    },
    {
        id: 38,
        name: "Science Experiments",
        activities: [61, 71],
        icon: "🧪"
    },
    {
        id: 39,
        name: "Business and Economics",
        activities: [62, 72],
        icon: "💼"
    },
    {
        id: 40,
        name: "Arts and Crafts",
        activities: [63, 73],
        icon: "🎨"
    },
    {
        id: 41,
        name: "Language and Grammar",
        activities: [64, 74],
        icon: "📝"
    },
    {
        id: 42,
        name: "Cultural Celebrations",
        activities: [65, 75],
        icon: "🎉"
    },
    {
        id: 43,
        name: "Personal Development",
        activities: [66],
        icon: "🎯"
    },
    {
        id: 44,
        name: "Environmental Projects",
        activities: [67],
        icon: "🌱"
    },
    {
        id: 45,
        name: "Digital Technology",
        activities: [68],
        icon: "💻"
    },
    {
        id: 46,
        name: "Health and Fitness",
        activities: [69],
        icon: "🏃‍♂️"
    },
    {
        id: 47,
        name: "World Geography",
        activities: [70],
        icon: "🌍"
    },
    {
        id: 48,
        name: "Public Speaking",
        activities: [76, 86],
        icon: "🎤"
    },
    {
        id: 49,
        name: "Problem Solving",
        activities: [77, 87],
        icon: "🧩"
    },
    {
        id: 50,
        name: "Creative Writing",
        activities: [78, 88],
        icon: "✍️"
    },
    {
        id: 51,
        name: "Media Production",
        activities: [79, 89],
        icon: "🎥"
    },
    {
        id: 52,
        name: "Fashion and Design",
        activities: [80, 90],
        icon: "👗"
    },
    {
        id: 53,
        name: "Psychology and Behavior",
        activities: [81],
        icon: "🧠"
    },
    {
        id: 54,
        name: "Future Technology",
        activities: [82],
        icon: "🤖"
    },
    {
        id: 55,
        name: "Local Community",
        activities: [83],
        icon: "🏘️"
    },
    {
        id: 56,
        name: "Global Issues",
        activities: [84],
        icon: "🌐"
    },
    {
        id: 57,
        name: "Time Management",
        activities: [85],
        icon: "⏰"
    },
    {
        id: 58,
        name: "Virtual Reality",
        activities: [91],
        icon: "🥽"
    },
    {
        id: 59,
        name: "Social Skills",
        activities: [92],
        icon: "🤝"
    },
    {
        id: 60,
        name: "Leadership",
        activities: [93, 97],
        icon: "👥"
    },
    {
        id: 61,
        name: "Natural Disasters",
        activities: [94],
        icon: "🌪️"
    },
    {
        id: 62,
        name: "Urban Life",
        activities: [95],
        icon: "🏙️"
    },
    {
        id: 63,
        name: "Mindfulness",
        activities: [96],
        icon: "🧘"
    },
    {
        id: 64,
        name: "Career Planning",
        activities: [98],
        icon: "💼"
    },
    {
        id: 65,
        name: "Digital Art",
        activities: [99],
        icon: "🎨"
    },
    {
        id: 66,
        name: "Event Planning",
        activities: [100],
        icon: "📅"
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadTopics();
    loadActivities();
    setupFilters();
    setupFavorites();
});

// Load topics into the topics grid
function loadTopics() {
    const topicsGrid = document.querySelector('.topics-grid');
    if (!topicsGrid) return;

    topicsGrid.innerHTML = topics.map(topic => `
        <div class="topic-card" data-topic-id="${topic.id}">
            <div class="topic-icon">${topic.icon}</div>
            <h3>${topic.name}</h3>
            <p>${topic.activities.length} activities</p>
            <button class="btn btn-primary" onclick="filterByTopic(${topic.id})">View Activities</button>
        </div>
    `).join('');
}

// Load activities into the activities grid
function loadActivities(filters = {}) {
    const activitiesGrid = document.querySelector('.activities-grid');
    if (!activitiesGrid) return;

    let filteredActivities = activities;

    // Apply filters
    if (filters.ageGroup && filters.ageGroup !== 'all') {
        filteredActivities = filteredActivities.filter(a => a.ageGroup === filters.ageGroup);
    }
    if (filters.type && filters.type !== 'all') {
        filteredActivities = filteredActivities.filter(a => a.type === filters.type);
    }
    if (filters.difficulty && filters.difficulty !== 'all') {
        filteredActivities = filteredActivities.filter(a => a.difficulty === filters.difficulty);
    }
    if (filters.topicId) {
        const topic = topics.find(t => t.id === filters.topicId);
        if (topic) {
            filteredActivities = filteredActivities.filter(a => topic.activities.includes(a.id));
        }
    }

    activitiesGrid.innerHTML = filteredActivities.map(activity => `
        <div class="activity-card" data-activity-id="${activity.id}">
            <h3>${activity.title}</h3>
            <p>${activity.description}</p>
            <div class="activity-meta">
                <span class="age-group">${activity.ageGroup}</span>
                <span class="difficulty">${activity.difficulty}</span>
                <span class="duration">${activity.duration}</span>
            </div>
            <div class="activity-details">
                <h4>Materials Needed:</h4>
                <ul>
                    ${activity.materials.map(m => `<li>${m}</li>`).join('')}
                </ul>
                <h4>Instructions:</h4>
                <ol>
                    ${activity.instructions.map(i => `<li>${i}</li>`).join('')}
                </ol>
            </div>
            <button class="btn-favorite" onclick="toggleFavorite(${activity.id})">
                ${isFavorite(activity.id) ? '❤️' : '🤍'}
            </button>
        </div>
    `).join('');
}

// Setup filter event listeners
function setupFilters() {
    const filters = ['ageGroup', 'activityType', 'difficulty'];
    
    filters.forEach(filter => {
        const select = document.getElementById(filter);
        if (select) {
            select.addEventListener('change', () => {
                const filterValues = {
                    ageGroup: document.getElementById('ageGroup').value,
                    type: document.getElementById('activityType').value,
                    difficulty: document.getElementById('difficulty').value
                };
                loadActivities(filterValues);
            });
        }
    });
}

// Filter activities by topic
function filterByTopic(topicId) {
    loadActivities({ topicId });
    document.getElementById('activities').scrollIntoView({ behavior: 'smooth' });
}

// Favorites functionality
function setupFavorites() {
    loadFavorites();
}

function isFavorite(activityId) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(activityId);
}

function toggleFavorite(activityId) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const index = favorites.indexOf(activityId);
    
    if (index === -1) {
        favorites.push(activityId);
    } else {
        favorites.splice(index, 1);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    loadActivities();
    loadFavorites();
}

function loadFavorites() {
    const favoritesGrid = document.querySelector('.favorites-grid');
    if (!favoritesGrid) return;

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const favoriteActivities = activities.filter(a => favorites.includes(a.id));

    if (favoriteActivities.length === 0) {
        favoritesGrid.innerHTML = '<p class="no-favorites">No favorite activities yet. Click the heart icon on any activity to save it here!</p>';
        return;
    }

    favoritesGrid.innerHTML = favoriteActivities.map(activity => `
        <div class="activity-card" data-activity-id="${activity.id}">
            <h3>${activity.title}</h3>
            <p>${activity.description}</p>
            <div class="activity-meta">
                <span class="age-group">${activity.ageGroup}</span>
                <span class="difficulty">${activity.difficulty}</span>
                <span class="duration">${activity.duration}</span>
            </div>
            <div class="activity-details">
                <h4>Materials Needed:</h4>
                <ul>
                    ${activity.materials.map(m => `<li>${m}</li>`).join('')}
                </ul>
                <h4>Instructions:</h4>
                <ol>
                    ${activity.instructions.map(i => `<li>${i}</li>`).join('')}
                </ol>
            </div>
            <button class="btn-favorite active" onclick="toggleFavorite(${activity.id})">
                ❤️
            </button>
        </div>
    `).join('');
}
