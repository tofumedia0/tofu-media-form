const form = document.getElementById("applicationForm");

const welcomeScreen = document.getElementById("welcomeScreen");
const applicationScreen = document.getElementById("applicationScreen");
const successScreen = document.getElementById("successScreen");

const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");

const languageBtn = document.getElementById("languageBtn");
const languageBtn2 = document.getElementById("languageBtn2");

const themeBtn = document.getElementById("themeBtn");
const themeBtn2 = document.getElementById("themeBtn2");

const progressBar = document.getElementById("progressBar");
const stepText = document.getElementById("stepText");
const percentText = document.getElementById("percentText");

const phoneInput = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");

const ageInput = document.getElementById("age");
const ageError = document.getElementById("ageError");

const departmentInput = document.getElementById("department");
const departmentNext = document.getElementById("departmentNext");

const questionsContainer =
    document.getElementById("questionsContainer");

let currentStep = 1;
let currentLanguage = "en";
let selectedDepartment = "";

const TOTAL_STEPS = 5;

const GOOGLE_SHEET_URL =
    "https://script.google.com/macros/s/AKfycbw7OIowRUO5QtuSKXLx7tQcVEJqP5h5SU3GiNJT8fTYiRTp3rVDf5f0eLrxNmROdgus/exec";

const WEB3FORMS_KEY =
    "4579e504-4006-4d59-99fb-ff7ff12f1fc1";

// ================================
// TRANSLATIONS
// ================================

const translations = {
    en: {
        season: "TOFU MEDIA — SEASON 2",

        welcomeTitle:
            "Let's make<br><span>opportunities happen.</span>",

        welcomeText:
            "Help us connect young people with scholarships, free courses, competitions, events and opportunities.",

        start: "Start Application",
        hint: "It only takes a few minutes.",

        getToKnow: "GET TO KNOW YOU",
        nameTitle: "What's your name? 👋",
        nameDescription: "Tell us your full name.",
        fullName: "Your full name",
        continue: "Continue",

        aboutYou: "ABOUT YOU",
        aboutTitle: "Tell us about yourself 🎓",

        aboutDescription:
            "These details help us understand our applicants better.",

        age: "Age",
        governorate: "Governorate",
        school: "School Name",
        schoolPlaceholder: "Your school name",
        email: "Email",
        whatsapp: "WhatsApp Number",

        chooseCommittee: "CHOOSE YOUR COMMITTEE",

        committeeTitle:
            "Which committee do you want to join? 🎯",

        committeeDescription:
            "Choose the committee that best matches your skills and interests.",

        research: "Research",
        researchSmall: "Find useful opportunities",

        content: "Content",
        contentSmall: "Turn opportunities into content",

        marketing: "Marketing",
        marketingSmall: "Reach the right audience",

        design: "Graphic Design",
        designSmall: "Make ideas visual",

        community: "Community",
        communitySmall: "Build a helpful community",

        pr: "PR & Partnerships",
        prSmall: "Build meaningful connections",

        hr: "HR",
        hrSmall: "Build and support the team",

        technology: "Technology",
        technologySmall: "Build and improve with technology",

        socialMedia: "Social Media",
        socialMediaSmall: "Create and grow TOFU online",

        organization: "Organization",
        organizationSmall: "Plan and organize activities",

        miniChallenge: "MINI CHALLENGE",

        challengeTitle:
            "Show us how you think 🧠",

        challengeDescription:
            "There is no perfect answer. We just want to see how you approach problems.",

        lastStep: "LAST STEP",

        lastTitle:
            "Tell us about yourself 💜",

        lastDescription:
            "Be honest. We care more about your mindset than having the perfect answer.",

        whyTofu:
            "Why do you want to join TOFU Media?",

        contribution:
            "What can you add to TOFU Media?",

        skills: "What are your skills?",

        skillsPlaceholder:
            "Tell us about your skills...",

        howHeard:
            "How did you hear about TOFU Media?",

        howHeardPlaceholder:
            "Tell us how you found out about TOFU Media...",

        hours:
            "How much time can you commit weekly?",

        choose: "Choose",
        submit: "Submit Application",

        successTitle:
            "Application<br><span>received! 🎉</span>",

        successText:
            "Thank you for applying to TOFU Media. Our team will review your application and contact you soon.",

        nextTitle: "What happens next?",

        nextText:
            "Keep an eye on your email and WhatsApp. Our team may contact you during the selection process."
    },

    ar: {
        season: "TOFU MEDIA — الموسم الثاني",

        welcomeTitle:
            "خلينا نخلي<br><span>الفرص تتحقق.</span>",

        welcomeText:
            "ساعدنا نربط الشباب بالمنح والكورسات المجانية والمسابقات والإيفنتات والفرص المختلفة.",

        start: "ابدأ التقديم",
        hint: "التقديم بياخد كام دقيقة بس.",

        getToKnow: "خلينا نتعرف عليك",
        nameTitle: "اسمك إيه؟ 👋",
        nameDescription: "اكتب اسمك بالكامل.",
        fullName: "اسمك بالكامل",
        continue: "كمل",

        aboutYou: "عن نفسك",
        aboutTitle: "عرفنا بنفسك 🎓",

        aboutDescription:
            "المعلومات دي بتساعدنا نفهم المتقدمين بشكل أفضل.",

        age: "السن",
        governorate: "المحافظة",
        school: "اسم المدرسة",
        schoolPlaceholder: "اسم مدرستك",
        email: "الإيميل",
        whatsapp: "رقم الواتساب",

        chooseCommittee: "اختار التيم",

        committeeTitle:
            "أنهي تيم حابب تنضم له؟ 🎯",

        committeeDescription:
            "اختار التيم اللي يناسب مهاراتك واهتماماتك أكتر.",

        research: "Research",
        researchSmall: "دور على الفرص المفيدة",

        content: "Content",
        contentSmall: "حوّل الفرص لمحتوى",

        marketing: "Marketing",
        marketingSmall: "وصل للمجمهور المناسب",

        design: "Graphic Design",
        designSmall: "حوّل الأفكار لتصميمات",

        community: "Community",
        communitySmall: "ابني Community مفيدة",

        pr: "PR & Partnerships",
        prSmall: "ابني علاقات وشراكات مفيدة",

        hr: "HR",
        hrSmall: "ساعد في بناء ودعم التيم",

        technology: "Technology",
        technologySmall:
            "ابني وطوّر باستخدام التكنولوجيا",

        socialMedia: "Social Media",
        socialMediaSmall:
            "اعمل وكبّر وجود TOFU أونلاين",

        organization: "Organization",
        organizationSmall:
            "خطط ونظم الأنشطة والإيفنتات",

        miniChallenge: "MINI CHALLENGE",

        challengeTitle:
            "ورينا طريقة تفكيرك 🧠",

        challengeDescription:
            "مفيش إجابة مثالية، إحنا بس عايزين نشوف بتفكر وبتتعامل مع المشاكل إزاي.",

        lastStep: "آخر خطوة",

        lastTitle:
            "عرفنا بنفسك أكتر 💜",

        lastDescription:
            "كون صريح، إحنا نهتم بطريقة تفكيرك أكتر من إن إجابتك تكون مثالية.",

        whyTofu:
            "ليه حابب تنضم لـ TOFU Media؟",

        contribution:
            "إيه اللي تقدر تضيفه لـ TOFU Media؟",

        skills: "إيه مهاراتك؟",

        skillsPlaceholder:
            "احكيلنا عن مهاراتك...",

        howHeard:
            "عرفت TOFU Media إزاي؟",

        howHeardPlaceholder:
            "احكيلنا عرفت TOFU Media منين...",

        hours:
            "قد إيه تقدر تلتزم أسبوعيًا؟",

        choose: "اختار",
        submit: "إرسال التقديم",

        successTitle:
            "تم استلام<br><span>التقديم! 🎉</span>",

        successText:
            "شكرًا لتقديمك في TOFU Media. فريقنا هيراجع طلبك وهيتواصل معاك قريب.",

        nextTitle:
            "إيه اللي هيحصل بعد كده؟",

        nextText:
            "تابع الإيميل والواتساب. ممكن فريقنا يتواصل معاك أثناء مرحلة الاختيار."
    }
};

// ================================
// DEPARTMENT QUESTIONS
// ================================

const departmentQuestions = {
    "Research & Opportunities": {
        en: [
            "How would you find a useful scholarship or opportunity for TOFU students?",
            "What information would you check before sharing an opportunity?",
            "How would you make sure an opportunity is trustworthy?",
            "What would you do if you found conflicting information about an opportunity?"
        ],
        ar: [
            "هتدور إزاي على منحة أو فرصة مفيدة لطلاب TOFU؟",
            "إيه المعلومات اللي هتتأكد منها قبل ما تنشر أي فرصة؟",
            "إزاي تتأكد إن الفرصة موثوقة؟",
            "هتعمل إيه لو لقيت معلومات مختلفة عن نفس الفرصة؟"
        ]
    },

    "Content Writing": {
        en: [
            "Write a short hook for a TOFU scholarship post.",
            "How would you explain a complicated opportunity in a simple way?",
            "What makes a social media caption interesting?",
            "How would you turn information into useful content for students?"
        ],
        ar: [
            "اكتب Hook قصير لمنشور عن منحة على TOFU.",
            "هتشرح إزاي فرصة معقدة بطريقة بسيطة؟",
            "إيه اللي يخلي الـ Caption جذاب؟",
            "إزاي تحول المعلومات لمحتوى مفيد للطلاب؟"
        ]
    },

    "Marketing": {
        en: [
            "Give us three ideas to promote a TOFU opportunity.",
            "How would you reach students who do not know TOFU?",
            "What type of content do you think attracts young people?",
            "How would you promote an opportunity with a small audience?"
        ],
        ar: [
            "ادينا 3 أفكار لترويج فرصة على TOFU.",
            "إزاي توصل لطلاب لسه مايعرفوش TOFU؟",
            "إيه نوع المحتوى اللي شايف إنه بيجذب الشباب؟",
            "إزاي تروج لفرصة لو الـ Audience لسه صغير؟"
        ]
    },

    "Graphic Design": {
        en: [
            "What makes a social media design attractive?",
            "How would you design a scholarship post for students?",
            "What information should be easy to notice in an opportunity design?",
            "What design tools do you know or want to learn?"
        ],
        ar: [
            "إيه اللي يخلي تصميم السوشيال ميديا جذاب؟",
            "هتعمل تصميم إزاي لمنحة موجهة للطلاب؟",
            "إيه المعلومات اللي لازم تكون واضحة جدًا في تصميم الفرصة؟",
            "إيه أدوات التصميم اللي بتعرف تستخدمها أو حابب تتعلمها؟"
        ]
    },

    "Community": {
        en: [
            "How would you make TOFU's community more active?",
            "What kind of activities could help members connect?",
            "How would you handle a member who is not participating?",
            "What would make you personally stay in an online community?"
        ],
        ar: [
            "إزاي تخلي Community بتاعة TOFU أكثر نشاطًا؟",
            "إيه الأنشطة اللي ممكن تساعد الأعضاء يتعرفوا على بعض؟",
            "هتتعامل إزاي مع Member مش بيشارك؟",
            "إيه اللي يخليك شخصيًا تكمل في Community أونلاين؟"
        ]
    },

    "PR & Partnerships": {
        en: [
            "How would you approach an organization for a collaboration?",
            "What makes a partnership useful for both sides?",
            "How would you introduce TOFU Media to a new organization?",
            "What would you do if an organization did not reply to your message?"
        ],
        ar: [
            "هتتواصل إزاي مع Organization عشان تعمل Collaboration؟",
            "إيه اللي يخلي الـ Partnership مفيدة للطرفين؟",
            "هتعرف TOFU Media لـ Organization جديدة إزاي؟",
            "هتعمل إيه لو Organization مردتش على رسالتك؟"
        ]
    },

    "HR": {
        en: [
            "How would you help a new volunteer feel comfortable in the team?",
            "How would you handle a team member who repeatedly misses deadlines?",
            "What qualities are important in a good volunteer?",
            "How would you solve a conflict between two team members?"
        ],
        ar: [
            "إزاي تساعد Volunteer جديد يحس إنه مرتاح مع التيم؟",
            "هتتعامل إزاي مع Member بيتأخر عن الـ Deadlines باستمرار؟",
            "إيه الصفات المهمة في الـ Volunteer الكويس؟",
            "هتحل إزاي مشكلة بين اتنين من أعضاء التيم؟"
        ]
    },

    "Technology": {
        en: [
            "What programming languages or technologies do you know?",
            "What kind of digital tool could help TOFU volunteers?",
            "How would you find and fix a bug in a website?",
            "Tell us about a project you have built or worked on."
        ],
        ar: [
            "إيه لغات البرمجة أو الـ Technologies اللي بتعرفها؟",
            "إيه نوع الـ Digital Tool اللي ممكن يساعد متطوعي TOFU؟",
            "هتدور وتصلح Bug في Website إزاي؟",
            "احكيلنا عن Project عملته أو اشتغلت عليه."
        ]
    },

    "Social Media": {
        en: [
            "Give us one idea for a TOFU Instagram or TikTok video.",
            "How would you increase engagement on a TOFU post?",
            "What makes a social media account worth following?",
            "How would you handle negative comments on TOFU content?"
        ],
        ar: [
            "ادينا فكرة واحدة لفيديو TOFU على Instagram أو TikTok.",
            "إزاي تزود الـ Engagement على Post بتاع TOFU؟",
            "إيه اللي يخلي Social Media Account يستاهل الـ Follow؟",
            "هتتعامل إزاي مع Negative Comments على محتوى TOFU؟"
        ]
    },

    "Organization": {
        en: [
            "How would you organize an event from planning to execution?",
            "What would you do if something unexpected happened during an event?",
            "How would you divide tasks between the organizing team?",
            "How would you make sure an event runs smoothly?"
        ],
        ar: [
            "هتنظم إيفنت من مرحلة التخطيط لحد التنفيذ إزاي؟",
            "هتعمل إيه لو حصلت مشكلة مفاجئة أثناء الإيفنت؟",
            "هتقسم التاسكات بين فريق التنظيم إزاي؟",
            "إزاي تتأكد إن الإيفنت ماشي بشكل منظم وسلس؟"
        ]
    }
};

// ================================
// PHONE NUMBER
// ================================

let iti = null;

if (
    phoneInput &&
    typeof window.intlTelInput === "function"
) {
    iti = window.intlTelInput(phoneInput, {
        initialCountry: "eg",
        separateDialCode: true,
        nationalMode: true,

        preferredCountries: [
            "eg",
            "sa",
            "ae",
            "jo",
            "kw",
            "qa",
            "gb",
            "us"
        ],

        utilsScript:
            "https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.2/build/js/utils.js"
    });

    phoneInput.style.direction = "ltr";
    phoneInput.style.textAlign = "left";

    const phoneContainer =
        phoneInput.closest(".iti");

    if (phoneContainer) {
        phoneContainer.style.direction = "ltr";
        phoneContainer.style.width = "100%";
    }

    phoneInput.addEventListener(
        "input",
        function () {
            let value = phoneInput.value;

            value = value.replace(
                /[٠-٩]/g,
                function (digit) {
                    return String(
                        "٠١٢٣٤٥٦٧٨٩".indexOf(digit)
                    );
                }
            );

            value = value.replace(
                /[^0-9]/g,
                ""
            );

            phoneInput.value = value;

            if (phoneError) {
                phoneError.textContent = "";
            }
        }
    );
}

// ================================
// THEME
// ================================

function loadTheme() {
    const savedTheme =
        localStorage.getItem("tofuTheme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }

    updateThemeButtons();
}

function updateThemeButtons() {
    const isDark =
        document.body.classList.contains("dark");

    if (themeBtn) {
        themeBtn.textContent =
            isDark ? "☀️" : "🌙";
    }

    if (themeBtn2) {
        themeBtn2.textContent =
            isDark ? "☀️" : "🌙";
    }
}

function toggleTheme() {
    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "tofuTheme",
        isDark ? "dark" : "light"
    );

    updateThemeButtons();
}

if (themeBtn) {
    themeBtn.addEventListener(
        "click",
        toggleTheme
    );
}

if (themeBtn2) {
    themeBtn2.addEventListener(
        "click",
        toggleTheme
    );
}

loadTheme();

// ================================
// LANGUAGE
// ================================

function updateLanguage() {
    const lang =
        translations[currentLanguage];

    document.documentElement.lang =
        currentLanguage;

    document.documentElement.dir =
        currentLanguage === "ar"
            ? "rtl"
            : "ltr";

    document
        .querySelectorAll("[data-i18n]")
        .forEach(function (element) {
            const key =
                element.getAttribute("data-i18n");

            if (lang[key] !== undefined) {
                element.innerHTML =
                    lang[key];
            }
        });

    document
        .querySelectorAll("[data-placeholder]")
        .forEach(function (element) {
            const key =
                element.getAttribute("data-placeholder");

            if (lang[key] !== undefined) {
                element.placeholder =
                    lang[key];
            }
        });

    if (languageBtn) {
        languageBtn.textContent =
            currentLanguage === "en"
                ? "العربية"
                : "English";
    }

    if (languageBtn2) {
        languageBtn2.textContent =
            currentLanguage === "en"
                ? "العربية"
                : "English";
    }

    if (ageInput) {
        ageInput.placeholder =
            currentLanguage === "en"
                ? "Your age"
                : "اكتب سنك";
    }

    if (phoneInput) {
        phoneInput.style.direction = "ltr";
        phoneInput.style.textAlign = "left";
    }

    const hours =
        document.getElementById("hours");

    if (hours) {
        const chooseOption =
            hours.querySelector(
                'option[value=""]'
            );

        if (chooseOption) {
            chooseOption.textContent =
                lang.choose;
        }
    }

    renderQuestions();
    updateProgress();
}

function toggleLanguage() {
    currentLanguage =
        currentLanguage === "en"
            ? "ar"
            : "en";

    updateLanguage();
}

if (languageBtn) {
    languageBtn.addEventListener(
        "click",
        toggleLanguage
    );
}

if (languageBtn2) {
    languageBtn2.addEventListener(
        "click",
        toggleLanguage
    );
}

// ================================
// PROGRESS
// ================================

function updateProgress() {
    const percent =
        ((currentStep - 1) /
            (TOTAL_STEPS - 1)) *
        100;

    if (progressBar) {
        progressBar.style.width =
            `${percent}%`;
    }

    if (stepText) {
        stepText.textContent =
            currentLanguage === "en"
                ? `Step ${currentStep} of ${TOTAL_STEPS}`
                : `الخطوة ${currentStep} من ${TOTAL_STEPS}`;
    }

    if (percentText) {
        percentText.textContent =
            `${Math.round(percent)}%`;
    }
}

// ================================
// SHOW STEP
// ================================

function showStep(stepNumber) {
    document
        .querySelectorAll(".step")
        .forEach(function (step) {
            step.classList.remove("active");
        });

    const targetStep =
        document.querySelector(
            `.step[data-step="${stepNumber}"]`
        );

    if (targetStep) {
        targetStep.classList.add("active");
    }

    currentStep = stepNumber;

    updateProgress();

    if (backBtn) {
        backBtn.style.visibility =
            currentStep === 1
                ? "hidden"
                : "visible";
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ================================
// START
// ================================

if (startBtn) {
    startBtn.addEventListener(
        "click",
        function () {
            if (welcomeScreen) {
                welcomeScreen.classList.remove("active");
            }

            if (applicationScreen) {
                applicationScreen.classList.add("active");
            }

            showStep(1);
        }
    );
}

// ================================
// BACK
// ================================

if (backBtn) {
    backBtn.addEventListener(
        "click",
        function () {
            if (currentStep > 1) {
                showStep(currentStep - 1);
            } else {
                if (applicationScreen) {
                    applicationScreen.classList.remove("active");
                }

                if (welcomeScreen) {
                    welcomeScreen.classList.add("active");
                }
            }
        }
    );
}

// ================================
// VALIDATION
// ================================

function validateStep(stepNumber) {
    const step =
        document.querySelector(
            `.step[data-step="${stepNumber}"]`
        );

    if (!step) {
        return true;
    }

    let valid = true;

    const requiredFields =
        step.querySelectorAll(
            "input[required], textarea[required], select[required]"
        );

    requiredFields.forEach(function (field) {
        if (field.type === "hidden") {
            return;
        }

        if (!field.value.trim()) {
            valid = false;

            field.classList.add("invalid");

            setTimeout(function () {
                field.classList.remove("invalid");
            }, 1500);
        }
    });

    if (stepNumber === 2) {
        const age =
            Number(
                ageInput
                    ? ageInput.value
                    : 0
            );

        if (
            !age ||
            age < 11 ||
            age > 30
        ) {
            valid = false;

            if (ageError) {
                ageError.textContent =
                    currentLanguage === "en"
                        ? "Age must be between 11 and 30."
                        : "السن لازم يكون من 11 لـ 30 سنة.";
            }
        } else {
            if (ageError) {
                ageError.textContent = "";
            }
        }

        if (phoneInput && iti) {
            const rawPhone =
                phoneInput.value.replace(
                    /\D/g,
                    ""
                );

            const country =
                iti.getSelectedCountryData();

            let validPhone = false;

            if (
                country &&
                country.iso2 === "eg"
            ) {
                validPhone =
                    /^(01[0125]\d{8}|1[0125]\d{8})$/.test(
                        rawPhone
                    );
            } else {
                validPhone =
                    iti.isValidNumber();
            }

            if (!validPhone) {
                valid = false;

                if (phoneError) {
                    phoneError.textContent =
                        currentLanguage === "en"
                            ? "Please enter a valid WhatsApp number."
                            : "اكتب رقم واتساب صحيح.";
                }
            } else {
                if (phoneError) {
                    phoneError.textContent = "";
                }
            }
        }
    }

    if (stepNumber === 3) {
        if (!selectedDepartment) {
            valid = false;

            if (departmentNext) {
                departmentNext.classList.add("invalid");

                setTimeout(function () {
                    departmentNext.classList.remove("invalid");
                }, 1500);
            }
        }
    }

    return valid;
}

// ================================
// NEXT BUTTONS
// ================================

document
    .querySelectorAll(".next-btn")
    .forEach(function (button) {
        button.addEventListener(
            "click",
            function () {
                if (
                    currentStep === 3 &&
                    !selectedDepartment
                ) {
                    return;
                }

                if (!validateStep(currentStep)) {
                    return;
                }

                if (
                    currentStep <
                    TOTAL_STEPS
                ) {
                    showStep(
                        currentStep + 1
                    );
                }
            }
        );
    });

// ================================
// DEPARTMENT SELECTION
// ================================

document
    .querySelectorAll(".department")
    .forEach(function (button) {
        button.addEventListener(
            "click",
            function () {
                document
                    .querySelectorAll(".department")
                    .forEach(function (item) {
                        item.classList.remove("selected");
                    });

                button.classList.add("selected");

                selectedDepartment =
                    button.dataset.department;

                if (departmentInput) {
                    departmentInput.value =
                        selectedDepartment;
                }

                if (departmentNext) {
                    departmentNext.disabled =
                        false;
                }

                renderQuestions();
            }
        );
    });

// ================================
// RENDER QUESTIONS
// ================================

function renderQuestions() {
    if (!questionsContainer) {
        return;
    }

    if (!selectedDepartment) {
        questionsContainer.innerHTML = "";
        return;
    }

    const departmentData =
        departmentQuestions[
            selectedDepartment
        ];

    if (!departmentData) {
        questionsContainer.innerHTML = "";
        return;
    }

    const questions =
        departmentData[
            currentLanguage
        ];

    questionsContainer.innerHTML = "";

    questions.forEach(function (question, index) {
        const wrapper =
            document.createElement("div");

        wrapper.className = "question";

        const label =
            document.createElement("label");

        label.textContent =
            `${index + 1}. ${question}`;

        const textarea =
            document.createElement("textarea");

        textarea.name =
            `question${index + 1}`;

        textarea.required = true;

        textarea.placeholder =
            currentLanguage === "en"
                ? "Your answer..."
                : "اكتب إجابتك...";

        wrapper.appendChild(label);
        wrapper.appendChild(textarea);

        questionsContainer.appendChild(wrapper);
    });
}

// ================================
// CREATE EMAIL MESSAGE
// ================================

function createEmailMessage(dataObject) {
    const lines = [];

    lines.push("TOFU MEDIA — NEW VOLUNTEER APPLICATION");
    lines.push("");
    lines.push("================================");
    lines.push("APPLICANT INFORMATION");
    lines.push("================================");
    lines.push("");

    lines.push(
        "Full Name: " +
        (dataObject.name || dataObject.fullName || "")
    );

    lines.push(
        "Age: " +
        (dataObject.age || "")
    );

    lines.push(
        "Governorate: " +
        (dataObject.governorate || "")
    );

    lines.push(
        "School: " +
        (dataObject.school || "")
    );

    lines.push(
        "Email: " +
        (dataObject.email || "")
    );

    lines.push(
        "WhatsApp: " +
        (dataObject.phone || "")
    );

    lines.push(
        "Committee: " +
        (dataObject.department || selectedDepartment)
    );

    lines.push(
        "Language: " +
        (dataObject.language || currentLanguage)
    );

    lines.push("");

    lines.push("================================");
    lines.push("FINAL QUESTIONS");
    lines.push("================================");
    lines.push("");

    const finalQuestions = [
        {
            key: "whyTofu",
            en: "Why do you want to join TOFU Media?",
            ar: "ليه حابب تنضم لـ TOFU Media؟"
        },
        {
            key: "contribution",
            en: "What can you add to TOFU Media?",
            ar: "إيه اللي تقدر تضيفه لـ TOFU Media؟"
        },
        {
            key: "skills",
            en: "What are your skills?",
            ar: "إيه مهاراتك؟"
        },
        {
            key: "howHeard",
            en: "How did you hear about TOFU Media?",
            ar: "عرفت TOFU Media إزاي؟"
        },
        {
            key: "hours",
            en: "How much time can you commit weekly?",
            ar: "قد إيه تقدر تلتزم أسبوعيًا؟"
        }
    ];

    finalQuestions.forEach(function (item) {
        const answer =
            dataObject[item.key] || "";

        const question =
            currentLanguage === "ar"
                ? item.ar
                : item.en;

        lines.push("Question:");
        lines.push(question);
        lines.push("Answer:");
        lines.push(answer);
        lines.push("");
    });

    lines.push("================================");
    lines.push("COMMITTEE MINI CHALLENGE");
    lines.push("================================");
    lines.push("");

    const questions =
        departmentQuestions[selectedDepartment]
            ? departmentQuestions[selectedDepartment][currentLanguage]
            : [];

    questions.forEach(function (question, index) {
        const answer =
            dataObject[`question${index + 1}`] || "";

        lines.push(
            `Question ${index + 1}:`
        );

        lines.push(question);

        lines.push("Answer:");

        lines.push(answer);

        lines.push("");
    });

    lines.push("================================");
    lines.push("End of application");
    lines.push("================================");

    return lines.join("\n");
}

// ================================
// FORM SUBMISSION
// ================================

if (form) {
    form.addEventListener(
        "submit",
        async function (event) {
            event.preventDefault();

            if (!validateStep(5)) {
                return;
            }

            if (!selectedDepartment) {
                return;
            }

            const submitButton =
                form.querySelector(".submit-btn");

            if (
                submitButton &&
                submitButton.disabled
            ) {
                return;
            }

            const formData =
                new FormData(form);

            let fullPhone = "";

            if (iti && phoneInput) {
                const rawPhone =
                    phoneInput.value.replace(
                        /\D/g,
                        ""
                    );

                const country =
                    iti.getSelectedCountryData();

                if (
                    country &&
                    country.iso2 === "eg" &&
                    /^1[0125]\d{8}$/.test(
                        rawPhone
                    )
                ) {
                    fullPhone =
                        "+20" + rawPhone;
                } else if (
                    country &&
                    country.iso2 === "eg" &&
                    /^01[0125]\d{8}$/.test(
                        rawPhone
                    )
                ) {
                    fullPhone =
                        "+20" +
                        rawPhone.substring(1);
                } else {
                    fullPhone =
                        iti.getNumber();
                }
            } else if (phoneInput) {
                fullPhone =
                    phoneInput.value.trim();
            }

            formData.set(
                "phone",
                fullPhone
            );

            formData.set(
                "department",
                selectedDepartment
            );

            formData.set(
                "language",
                currentLanguage
            );

            if (questionsContainer) {
                const questions =
                    questionsContainer.querySelectorAll(
                        "textarea"
                    );

                questions.forEach(function (textarea) {
                    formData.set(
                        textarea.name,
                        textarea.value.trim()
                    );
                });
            }

            if (submitButton) {
                submitButton.disabled = true;

                submitButton.innerHTML =
                    currentLanguage === "en"
                        ? "Sending..."
                        : "جاري الإرسال...";
            }

            const dataObject = {};

            formData.forEach(function (value, key) {
                dataObject[key] = value;
            });

            // Create full email message
            const emailMessage =
                createEmailMessage(dataObject);

            // Add email message to the data sent to Google Apps Script
            dataObject.email_message =
                emailMessage;

            // Show success screen

            if (applicationScreen) {
                applicationScreen.classList.remove(
                    "active"
                );
            }

            if (successScreen) {
                successScreen.classList.add(
                    "active"
                );
            }

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            // ================================
            // WEB3FORMS
            // ================================

            try {
                const web3Data =
                    new FormData();

                web3Data.append(
                    "access_key",
                    WEB3FORMS_KEY
                );

                web3Data.append(
                    "subject",
                    "New TOFU Media Volunteer Application"
                );

                web3Data.append(
                    "from_name",
                    "TOFU Media Volunteer Form"
                );

                web3Data.append(
                    "message",
                    emailMessage
                );

                Object.keys(dataObject).forEach(
                    function (key) {
                        if (key !== "email_message") {
                            web3Data.append(
                                key,
                                dataObject[key]
                            );
                        }
                    }
                );

                const web3Response =
                    await fetch(
                        "https://api.web3forms.com/submit",
                        {
                            method: "POST",
                            body: web3Data
                        }
                    );

                const web3Result =
                    await web3Response.json();

                if (!web3Result.success) {
                    console.error(
                        "Web3Forms error:",
                        web3Result
                    );
                } else {
                    console.log(
                        "Web3Forms submission successful."
                    );
                }

            } catch (error) {
                console.error(
                    "Web3Forms submission error:",
                    error
                );
            }

            // ================================
            // GOOGLE APPS SCRIPT
            // ================================

            try {
                await fetch(
                    GOOGLE_SHEET_URL,
                    {
                        method: "POST",
                        mode: "no-cors",

                        headers: {
                            "Content-Type":
                                "text/plain;charset=utf-8"
                        },

                        body:
                            JSON.stringify(
                                dataObject
                            )
                    }
                );

                console.log(
                    "Google Apps Script request sent."
                );

            } catch (error) {
                console.error(
                    "Google Apps Script error:",
                    error
                );
            }
        }
    );
}

// ================================
// REMOVE INVALID CLASS
// ================================

document
    .querySelectorAll(
        "input, textarea, select"
    )
    .forEach(function (field) {
        field.addEventListener(
            "input",
            function () {
                field.classList.remove(
                    "invalid"
                );
            }
        );

        field.addEventListener(
            "change",
            function () {
                field.classList.remove(
                    "invalid"
                );
            }
        );
    });

// ================================
// INITIAL SETUP
// ================================

updateLanguage();
showStep(1);

if (backBtn) {
    backBtn.style.visibility = "hidden";
}
