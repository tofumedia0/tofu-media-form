document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       ELEMENTS
    ========================================== */

    const welcomeScreen =
        document.getElementById("welcomeScreen");

    const applicationScreen =
        document.getElementById("applicationScreen");

    const successScreen =
        document.getElementById("successScreen");

    const startBtn =
        document.getElementById("startBtn");

    const backBtn =
        document.getElementById("backBtn");

    const form =
        document.getElementById("applicationForm");

    const steps =
        document.querySelectorAll(".step");

    const progressBar =
        document.getElementById("progressBar");

    const stepText =
        document.getElementById("stepText");

    const percentText =
        document.getElementById("percentText");

    const departmentCards =
        document.querySelectorAll(".department");

    const departmentInput =
        document.getElementById("department");

    const departmentNext =
        document.getElementById("departmentNext");

    const questionsContainer =
        document.getElementById("questionsContainer");

    const challengeTitle =
        document.getElementById("challengeTitle");

    const languageBtn =
        document.getElementById("languageBtn");

    const languageBtn2 =
        document.getElementById("languageBtn2");


    /* ==========================================
       SETTINGS
    ========================================== */

    const ACCESS_KEY =
        "4579e504-4006-4d59-99fb-ff7ff12f1fc1";

    const TOTAL_STEPS = 5;

    let currentStep = 1;

    let selectedDepartment = "";

    let currentLanguage = "en";


    /* ==========================================
       TRANSLATIONS
    ========================================== */

    const translations = {

        en: {

            season: "TOFU MEDIA — SEASON 2",

            welcomeTitle:
                "Let's make<br><span>opportunities happen.</span>",

            welcomeText:
                "Help us connect young people with scholarships, free courses, competitions, events and opportunities.",

            start:
                "Start Application",

            hint:
                "It only takes a few minutes.",

            getToKnow:
                "GET TO KNOW YOU",

            nameTitle:
                "What's your name? 👋",

            nameDescription:
                "Tell us your full name.",

            fullName:
                "Your full name",

            aboutYou:
                "ABOUT YOU",

            aboutTitle:
                "Tell us about yourself 🎓",

            aboutDescription:
                "These details help us understand our applicants better.",

            age:
                "Age",

            governorate:
                "Governorate",

            email:
                "Email",

            whatsapp:
                "WhatsApp Number",

            chooseDepartment:
                "CHOOSE YOUR DEPARTMENT",

            departmentTitle:
                "Where do you see yourself? 🎯",

            departmentDescription:
                "Choose the field that best matches your skills and interests.",

            research:
                "Research",

            researchSmall:
                "Find useful opportunities",

            content:
                "Content",

            contentSmall:
                "Turn opportunities into content",

            marketing:
                "Marketing",

            marketingSmall:
                "Reach the right audience",

            design:
                "Design",

            designSmall:
                "Make ideas visual",

            community:
                "Community",

            communitySmall:
                "Build a helpful community",

            pr:
                "PR & Partnerships",

            prSmall:
                "Build meaningful connections",

            hr:
                "HR",

            hrSmall:
                "Build and support the team",

            miniChallenge:
                "MINI CHALLENGE",

            challengeDescription:
                "There is no perfect answer. We just want to see how you approach problems.",

            lastStep:
                "LAST STEP",

            lastTitle:
                "Tell us about you 💜",

            lastDescription:
                "Be honest. We care more about your mindset than having the perfect answer.",

            whyTofu:
                "Why do you want to join TOFU Media?",

            contribution:
                "What can you add to TOFU Media?",

            hours:
                "How much time can you commit weekly?",

            choose:
                "Choose",

            submit:
                "Submit Application",

            successTitle:
                "Application<br><span>received! 🎉</span>",

            successText:
                "Thank you for applying to TOFU Media. Our team will review your application and contact you soon.",

            nextTitle:
                "What happens next?",

            nextText:
                "Keep an eye on your email and WhatsApp. Our team may contact you during the selection process."

        },


        ar: {

            season:
                "توفو ميديا — السيزون الثاني",

            welcomeTitle:
                "خلينا نخلي<br><span>الفرص توصل لمستحقيها.</span>",

            welcomeText:
                "ساعدنا نوصل الشباب بالمنح والكورسات المجانية والمسابقات والإيفنتات والفرص المختلفة.",

            start:
                "ابدأ التقديم",

            hint:
                "التقديم مش هياخد غير كام دقيقة.",

            getToKnow:
                "خلينا نتعرف عليك",

            nameTitle:
                "اسمك إيه؟ 👋",

            nameDescription:
                "اكتب اسمك بالكامل.",

            fullName:
                "الاسم بالكامل",

            aboutYou:
                "عن نفسك",

            aboutTitle:
                "قولنا شوية عن نفسك 🎓",

            aboutDescription:
                "المعلومات دي بتساعدنا نفهم المتقدمين بشكل أفضل.",

            age:
                "السن",

            governorate:
                "المحافظة",

            email:
                "الإيميل",

            whatsapp:
                "رقم الواتساب",

            chooseDepartment:
                "اختار التيم",

            departmentTitle:
                "شايف نفسك فين؟ 🎯",

            departmentDescription:
                "اختار المجال اللي أقرب لمهاراتك واهتماماتك.",

            research:
                "Research",

            researchSmall:
                "البحث عن الفرص المفيدة",

            content:
                "Content",

            contentSmall:
                "تحويل الفرص لمحتوى",

            marketing:
                "Marketing",

            marketingSmall:
                "الوصول للجمهور المناسب",

            design:
                "Graphic Design",

            designSmall:
                "تحويل الأفكار لتصميمات",

            community:
                "Community",

            communitySmall:
                "بناء مجتمع مفيد",

            pr:
                "PR & Partnerships",

            prSmall:
                "بناء العلاقات والشراكات",

            hr:
                "HR",

            hrSmall:
                "دعم وبناء التيم",

            miniChallenge:
                "تحدي بسيط",

            challengeDescription:
                "مفيش إجابة مثالية. إحنا بس عايزين نشوف طريقة تفكيرك وتعاملَك مع المواقف.",

            lastStep:
                "آخر خطوة",

            lastTitle:
                "قولنا أكتر عنك 💜",

            lastDescription:
                "خليك صريح. إحنا مهتمين بطريقة تفكيرك أكتر من إن إجابتك تكون مثالية.",

            whyTofu:
                "ليه عايز تنضم لـ TOFU Media؟",

            contribution:
                "إيه اللي تقدر تضيفه لـ TOFU Media؟",

            hours:
                "تقدر تلتزم بكام ساعة أسبوعيًا؟",

            choose:
                "اختار",

            submit:
                "إرسال التقديم",

            successTitle:
                "تم استلام<br><span>التقديم! 🎉</span>",

            successText:
                "شكرًا لتقديمك في TOFU Media. التيم هيقوم بمراجعة التقديم والتواصل معاك قريبًا.",

            nextTitle:
                "إيه اللي هيحصل بعد كده؟",

            nextText:
                "تابع الإيميل والواتساب بتوعك، ممكن التيم يتواصل معاك أثناء مرحلة الاختيار."

        }

    };


    /* ==========================================
       DEPARTMENT QUESTIONS
    ========================================== */

    const questions = {

        "Research & Opportunities": {

            en: [
                "You found a scholarship online. What would you check before sharing it with TOFU students?",
                "Where would you search for reliable scholarships, free courses, competitions and youth opportunities?",
                "An opportunity has complicated requirements. How would you make the information easier for students to understand?",
                "What are the most important details that should always be included in an opportunity post?"
            ],

            ar: [
                "لقيت منحة أونلاين، إيه الحاجات اللي هتتأكد منها قبل ما تنشرها لطلاب TOFU؟",
                "هتدور فين على منح وكورسات مجانية ومسابقات وفرص للشباب تكون موثوقة؟",
                "لو الفرصة شروطها معقدة، هتشرحها للطلاب بطريقة بسيطة إزاي؟",
                "إيه أهم المعلومات اللي لازم تكون موجودة في أي بوست عن فرصة؟"
            ]

        },


        "Content Writing": {

            en: [
                "Write a short hook that would make a student stop scrolling when they see a post about a free opportunity.",
                "How would you explain a complicated scholarship to a student in a simple way?",
                "What makes social media content interesting and useful at the same time?",
                "Imagine you have to write a post about a free course. What information would you include?"
            ],

            ar: [
                "اكتب Hook قصير يخلي الطالب يوقف الـ scrolling لما يشوف بوست عن فرصة مجانية.",
                "هتشرح منحة معقدة لطالب بطريقة بسيطة إزاي؟",
                "إيه اللي بيخلي محتوى السوشيال ميديا interesting ومفيد في نفس الوقت؟",
                "لو مطلوب منك تعمل بوست عن كورس مجاني، إيه المعلومات اللي هتحطها؟"
            ]

        },


        "Marketing": {

            en: [
                "TOFU found a fully funded opportunity for high school students. Give us 3 ideas to reach the students who need it.",
                "How would you promote TOFU inside a Facebook group without making your post look like spam?",
                "Which is more important: reaching a huge number of people or reaching the right people? Explain why.",
                "Give us one creative marketing idea that could make more young people know about TOFU."
            ],

            ar: [
                "TOFU لقت فرصة ممولة بالكامل لطلاب الثانوية. ادينا 3 أفكار توصل بيها للطلاب اللي محتاجينها.",
                "هتعمل Marketing لـ TOFU في جروب فيسبوك من غير ما البوست يبان Spam إزاي؟",
                "إيه الأهم: توصل لعدد كبير جدًا ولا توصل للناس الصح؟ وليه؟",
                "ادينا فكرة Marketing Creative تخلي شباب أكتر يعرفوا TOFU."
            ]

        },


        "Graphic Design": {

            en: [
                "What design tools do you use and how comfortable are you with them?",
                "Imagine you have to design a post about a scholarship. What information would you make visually stand out?",
                "What makes a social media design look professional?",
                "Send us a link to your portfolio or previous work if you have one."
            ],

            ar: [
                "إيه أدوات التصميم اللي بتستخدمها ومستواك فيها عامل إزاي؟",
                "لو هتعمل Design عن منحة، إيه المعلومات اللي هتخليها أوضح بصريًا؟",
                "إيه اللي بيخلي تصميم السوشيال ميديا شكله Professional؟",
                "ابعتلنا لينك الـ Portfolio أو أي شغل سابق لو عندك."
            ]

        },


        "Community": {

            en: [
                "A student asks about an opportunity and you don't know the answer. What would you do?",
                "How would you make students feel comfortable asking questions inside the TOFU community?",
                "What type of content or activities could make students stay active in the community?",
                "How would you deal with someone who repeatedly breaks the community rules?"
            ],

            ar: [
                "طالب سأل عن فرصة وإنت مش عارف الإجابة، هتعمل إيه؟",
                "إزاي تخلي الطلاب مرتاحين في إنهم يسألوا جوه Community بتاعة TOFU؟",
                "إيه نوع المحتوى أو الأنشطة اللي ممكن تخلي الطلاب Active في الـ Community؟",
                "هتتعامل إزاي مع شخص بيكرر مخالفة قواعد الـ Community؟"
            ]

        },


        "PR & Partnerships": {

            en: [
                "Imagine you want to contact an organization and propose a collaboration with TOFU. How would you approach them?",
                "Write a short message introducing TOFU Media to another youth organization.",
                "What makes an organization interested in partnering with another organization?",
                "How would you maintain a good relationship with a partner after finishing a collaboration?"
            ],

            ar: [
                "لو عايز تتواصل مع Organization وتقترح Collaboration مع TOFU، هتبدأ معاهم إزاي؟",
                "اكتب Message قصيرة تعرف فيها TOFU Media لـ Youth Organization تانية.",
                "إيه اللي ممكن يخلي Organization تهتم إنها تعمل Partnership مع Organization تانية؟",
                "إزاي تحافظ على علاقة كويسة مع Partner بعد انتهاء الـ Collaboration؟"
            ]

        },


        "HR": {

            en: [
                "A volunteer suddenly stops responding to the team. What would you do first?",
                "A team member repeatedly misses deadlines. How would you handle the situation?",
                "What qualities do you think a good volunteer should have?",
                "How would you make a new volunteer feel welcomed inside the TOFU team?"
            ],

            ar: [
                "Volunteer فجأة بطل يرد على التيم، أول حاجة هتعملها إيه؟",
                "Team Member بيكرر إنه يتأخر عن الـ Deadlines، هتتعامل مع الموضوع إزاي؟",
                "إيه الصفات اللي شايف إنها مهمة في أي Volunteer كويس؟",
                "إزاي تخلي Volunteer جديد يحس إنه مرحب بيه جوه TOFU؟"
            ]

        }

    };


    /* ==========================================
       LANGUAGE
    ========================================== */

    function changeLanguage(lang) {

        currentLanguage = lang;

        document.documentElement.lang = lang;

        document.documentElement.dir =
            lang === "ar" ? "rtl" : "ltr";


        document
            .querySelectorAll("[data-i18n]")
            .forEach(element => {

                const key =
                    element.dataset.i18n;

                if (translations[lang][key]) {

                    element.innerHTML =
                        translations[lang][key];

                }

            });


        document
            .querySelectorAll("[data-placeholder]")
            .forEach(input => {

                const key =
                    input.dataset.placeholder;

                if (translations[lang][key]) {

                    input.placeholder =
                        translations[lang][key];

                }

            });


        const newLanguage =
            lang === "en"
                ? "العربية"
                : "English";


        languageBtn.textContent =
            newLanguage;

        languageBtn2.textContent =
            newLanguage;


        renderQuestions();


        updateProgress();

    }


    languageBtn.addEventListener(
        "click",
        () => {

            changeLanguage(
                currentLanguage === "en"
                    ? "ar"
                    : "en"
            );

        }
    );


    languageBtn2.addEventListener(
        "click",
        () => {

            changeLanguage(
                currentLanguage === "en"
                    ? "ar"
                    : "en"
            );

        }
    );


    /* ==========================================
       START
    ========================================== */

    startBtn.addEventListener(
        "click",
        () => {

            welcomeScreen.classList.remove(
                "active"
            );

            applicationScreen.classList.add(
                "active"
            );

            currentStep = 1;

            updateProgress();

        }
    );


    /* ==========================================
       NEXT
    ========================================== */

    document
        .querySelectorAll(".next-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const step =
                        document.querySelector(
                            `.step[data-step="${currentStep}"]`
                        );


                    if (!validateStep(step)) {
                        return;
                    }


                    if (
                        currentStep <
                        TOTAL_STEPS
                    ) {

                        currentStep++;

                        showStep(currentStep);

                        updateProgress();

                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        });

                    }

                }
            );

        });


    /* ==========================================
       SHOW STEP
    ========================================== */

    function showStep(number) {

        steps.forEach(step => {

            step.classList.remove(
                "active"
            );

        });


        const selected =
            document.querySelector(
                `.step[data-step="${number}"]`
            );


        if (selected) {

            selected.classList.add(
                "active"
            );

        }

    }


    /* ==========================================
       PROGRESS
    ========================================== */

    function updateProgress() {

        const percentage =
            (currentStep / TOTAL_STEPS) * 100;


        progressBar.style.width =
            `${percentage}%`;


        if (currentLanguage === "ar") {

            stepText.textContent =
                `الخطوة ${currentStep} من ${TOTAL_STEPS}`;

        } else {

            stepText.textContent =
                `Step ${currentStep} of ${TOTAL_STEPS}`;

        }


        percentText.textContent =
            `${Math.round(percentage)}%`;

    }


    /* ==========================================
       BACK
    ========================================== */

    backBtn.addEventListener(
        "click",
        () => {

            if (currentStep > 1) {

                currentStep--;

                showStep(currentStep);

                updateProgress();

            } else {

                applicationScreen.classList.remove(
                    "active"
                );

                welcomeScreen.classList.add(
                    "active"
                );

            }

        }
    );


    /* ==========================================
       DEPARTMENT
    ========================================== */

    departmentCards.forEach(card => {

        card.addEventListener(
            "click",
            () => {

                departmentCards.forEach(item => {

                    item.classList.remove(
                        "selected"
                    );

                });


                card.classList.add(
                    "selected"
                );


                selectedDepartment =
                    card.dataset.department;


                departmentInput.value =
                    selectedDepartment;


                departmentNext.disabled =
                    false;


                renderQuestions();

            }
        );

    });


    /* ==========================================
       RENDER QUESTIONS
    ========================================== */

    function renderQuestions() {

        if (!selectedDepartment) {
            return;
        }


        const department =
            questions[selectedDepartment];


        if (!department) {
            return;
        }


        const currentQuestions =
            department[currentLanguage];


        questionsContainer.innerHTML = "";


        challengeTitle.textContent =
            currentLanguage === "ar"
                ? `${getArabicDepartmentName(selectedDepartment)} Challenge 🧠`
                : `${selectedDepartment} Challenge 🧠`;


        currentQuestions.forEach(
            (question, index) => {

                const wrapper =
                    document.createElement("div");


                wrapper.className =
                    "question";


                const label =
                    document.createElement("label");


                label.className =
                    "question-title";


                label.innerHTML = `
                    <span class="question-number">
                        ${index + 1}
                    </span>
                    ${question}
                `;


                const textarea =
                    document.createElement("textarea");


                textarea.required = true;

                textarea.name =
                    `challenge_${index + 1}`;

                textarea.placeholder =
                    currentLanguage === "ar"
                        ? "اكتب إجابتك هنا..."
                        : "Write your answer here...";


                wrapper.appendChild(label);

                wrapper.appendChild(textarea);

                questionsContainer.appendChild(
                    wrapper
                );

            }
        );

    }


    function getArabicDepartmentName(department) {

        const names = {

            "Research & Opportunities":
                "Research & Opportunities",

            "Content Writing":
                "Content Writing",

            "Marketing":
                "Marketing",

            "Graphic Design":
                "Graphic Design",

            "Community":
                "Community",

            "PR & Partnerships":
                "PR & Partnerships",

            "HR":
                "HR"

        };


        return names[department] || department;

    }


    /* ==========================================
       VALIDATION
    ========================================== */

    function validateStep(step) {

        if (!step) {
            return false;
        }


        const fields =
            step.querySelectorAll(
                "input, textarea, select"
            );


        for (const field of fields) {

            if (!field.checkValidity()) {

                field.reportValidity();

                field.focus();

                return false;

            }

        }


        return true;

    }


    /* ==========================================
       PHONE
    ========================================== */

    function validPhone(phone) {

        return /^01[0125][0-9]{8}$/.test(
            phone
        );

    }


    /* ==========================================
       SUBMIT
    ========================================== */

    form.addEventListener(
        "submit",
        async event => {

            event.preventDefault();


            const finalStep =
                document.querySelector(
                    `.step[data-step="${TOTAL_STEPS}"]`
                );


            if (!validateStep(finalStep)) {
                return;
            }


            if (!selectedDepartment) {

                alert(
                    currentLanguage === "ar"
                        ? "اختاري التيم الأول."
                        : "Please choose a department first."
                );

                return;

            }


            const phone =
                document
                    .getElementById("phone")
                    .value
                    .trim();


            if (!validPhone(phone)) {

                alert(
                    currentLanguage === "ar"
                        ? "اكتبي رقم واتساب مصري صحيح مكون من 11 رقم."
                        : "Please enter a valid 11-digit Egyptian WhatsApp number."
                );

                currentStep = 2;

                showStep(2);

                updateProgress();

                return;

            }


            const submitButton =
                form.querySelector(
                    ".submit-btn"
                );


            const oldText =
                submitButton.innerHTML;


            submitButton.disabled = true;

            submitButton.innerHTML =
                currentLanguage === "ar"
                    ? "جاري الإرسال..."
                    : "Sending...";


            /* ================================
               CREATE APPLICATION
            ================================= */

            const data =
                new FormData();


            data.append(
                "access_key",
                ACCESS_KEY
            );


            data.append(
                "subject",
                `TOFU Media Application - ${selectedDepartment}`
            );


            data.append(
                "from_name",
                "TOFU Media Recruitment"
            );


            data.append(
                "Full Name",
                document
                    .getElementById("name")
                    .value
                    .trim()
            );


            data.append(
                "Age",
                document
                    .getElementById("age")
                    .value
                    .trim()
            );


            data.append(
                "Governorate",
                document
                    .getElementById("governorate")
                    .value
                    .trim()
            );


            data.append(
                "Email",
                document
                    .getElementById("email")
                    .value
                    .trim()
            );


            data.append(
                "WhatsApp",
                phone
            );


            data.append(
                "Department",
                selectedDepartment
            );


            /* =================================
               QUESTIONS
            ================================= */

            const answers =
                questionsContainer.querySelectorAll(
                    "textarea"
                );


            const originalQuestions =
                questions[
                    selectedDepartment
                ].en;


            answers.forEach(
                (answer, index) => {

                    data.append(
                        `Question ${index + 1}`,
                        answer.value.trim()
                    );


                    data.append(
                        `Question ${index + 1} Text`,
                        originalQuestions[index]
                    );

                }
            );


            /* =================================
               GENERAL QUESTIONS
            ================================= */

            data.append(
                "Why TOFU?",
                document
                    .getElementById("whyTofu")
                    .value
                    .trim()
            );


            data.append(
                "What can you add?",
                document
                    .getElementById("contribution")
                    .value
                    .trim()
            );


            data.append(
                "Weekly Commitment",
                document
                    .getElementById("hours")
                    .value
            );


            /* =================================
               SEND
            ================================= */

            try {

                const response =
                    await fetch(
                        "https://api.web3forms.com/submit",
                        {
                            method: "POST",
                            body: data
                        }
                    );


                const result =
                    await response.json();


                if (result.success) {

                    form.reset();

                    selectedDepartment = "";

                    departmentCards.forEach(
                        card => {
                            card.classList.remove(
                                "selected"
                            );
                        }
                    );


                    departmentNext.disabled =
                        true;


                    questionsContainer.innerHTML =
                        "";


                    currentStep = 1;


                    applicationScreen
                        .classList
                        .remove("active");


                    successScreen
                        .classList
                        .add("active");


                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                } else {

                    throw new Error(
                        result.message ||
                        "Submission failed"
                    );

                }

            } catch (error) {

                console.error(error);

                alert(
                    currentLanguage === "ar"
                        ? "حصلت مشكلة أثناء الإرسال، جربي تاني."
                        : "Something went wrong while submitting. Please try again."
                );


                submitButton.disabled =
                    false;


                submitButton.innerHTML =
                    oldText;

            }

        }
    );


    /* ==========================================
       INITIAL
    ========================================== */

    changeLanguage("en");

});

