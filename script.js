document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const welcomeScreen = document.getElementById("welcomeScreen");
    const applicationScreen = document.getElementById("applicationScreen");
    const successScreen = document.getElementById("successScreen");

    const startBtn = document.getElementById("startBtn");
    const backBtn = document.getElementById("backBtn");

    const form = document.getElementById("applicationForm");
    const steps = document.querySelectorAll(".step");

    const progressBar = document.getElementById("progressBar");
    const stepText = document.getElementById("stepText");
    const percentText = document.getElementById("percentText");

    const languageBtn = document.getElementById("languageBtn");
    const languageBtn2 = document.getElementById("languageBtn2");

    const themeBtn = document.getElementById("themeBtn");
    const themeBtn2 = document.getElementById("themeBtn2");

    const departmentCards =
        document.querySelectorAll(".department");

    const departmentInput =
        document.getElementById("department");

    const departmentNext =
        document.getElementById("departmentNext");

    const questionsContainer =
        document.getElementById("questionsContainer");

    const phoneInput =
        document.getElementById("phone");

    const phoneError =
        document.getElementById("phoneError");

    const ageInput =
        document.getElementById("age");

    const ageError =
        document.getElementById("ageError");


    /* =====================================================
       VARIABLES
    ===================================================== */

    let currentStep = 1;
    let currentLanguage = "en";
    let selectedDepartment = "";

    const TOTAL_STEPS = 5;

    /*
     * =====================================================
     * GOOGLE SHEETS URL
     * =====================================================
     *
     * حطي هنا رابط الـ Web App اللي طلعلك من Google Apps Script.
     *
     * مثال:
     *
     * const GOOGLE_SHEETS_URL =
     *     "https://script.google.com/macros/s/AKfycbw7OIowRUO5QtuSKXLx7tQcVEJqP5h5SU3GiNJT8fTYiRTp3rVDf5f0eLrxNmROdgus/exec";
     *
     */

    const GOOGLE_SHEETS_URL =
        "https://script.google.com/macros/s/AKfycbw7OIowRUO5QtuSKXLx7tQcVEJqP5h5SU3GiNJT8fTYiRTp3rVDf5f0eLrxNmROdgus/exec";


    /* =====================================================
       DARK MODE
    ===================================================== */

    function applyTheme(theme) {

        if (theme === "dark") {

            document.body.classList.add("dark");

            if (themeBtn) {
                themeBtn.textContent = "☀️";
            }

            if (themeBtn2) {
                themeBtn2.textContent = "☀️";
            }

        } else {

            document.body.classList.remove("dark");

            if (themeBtn) {
                themeBtn.textContent = "🌙";
            }

            if (themeBtn2) {
                themeBtn2.textContent = "🌙";
            }
        }

        localStorage.setItem("tofuTheme", theme);
    }


    const savedTheme =
        localStorage.getItem("tofuTheme") || "light";

    applyTheme(savedTheme);


    function toggleTheme() {

        const isDark =
            document.body.classList.contains("dark");

        applyTheme(isDark ? "light" : "dark");
    }


    if (themeBtn) {
        themeBtn.addEventListener("click", toggleTheme);
    }

    if (themeBtn2) {
        themeBtn2.addEventListener("click", toggleTheme);
    }


    /* =====================================================
       PHONE
    ===================================================== */

    let iti = null;

    if (phoneInput && window.intlTelInput) {

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

            loadUtils: () =>
                import(
                    "https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.2/build/js/utils.js"
                )
        });
    }


    /* =====================================================
       TRANSLATIONS
    ===================================================== */

    const translations = {

        en: {

            season:
                "TOFU MEDIA — SEASON 2",

            welcomeTitle:
                `Let's make<br><span>opportunities happen.</span>`,

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
                "Graphic Design",

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

            challengeTitle:
                "Show us how you think 🧠",

            challengeDescription:
                "There is no perfect answer. We just want to see how you approach problems.",

            lastStep:
                "LAST STEP",

            lastTitle:
                "Tell us about yourself 💜",

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

            continue:
                "Continue",

            submit:
                "Submit Application",

            successTitle:
                `Application<br><span>received! 🎉</span>`,

            successText:
                "Thank you for applying to TOFU Media. Our team will review your application and contact you soon.",

            nextTitle:
                "What happens next?",

            nextText:
                "Keep an eye on your email and WhatsApp. Our team may contact you during the selection process.",

            phoneError:
                "Please enter a valid phone number.",

            ageError:
                "Age must be between 11 and 30.",

            chooseDepartmentError:
                "Please choose a department first.",

            sending:
                "Sending application... ⏳",

            submitAgain:
                "Submit Application 🚀",

            submitError:
                "Something went wrong while submitting. Please check your internet connection and try again."
        },


        ar: {

            season:
                "TOFU MEDIA — السيزون الثاني",

            welcomeTitle:
                `خلينا نخلي<br><span>الفرص توصل لمستحقيها.</span>`,

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
                "اختار المجال الأقرب لمهاراتك واهتماماتك.",

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

            challengeTitle:
                "ورينا طريقة تفكيرك 🧠",

            challengeDescription:
                "مفيش إجابة مثالية. إحنا بس عايزين نشوف طريقة تفكيرك وتعاملك مع المواقف.",

            lastStep:
                "آخر خطوة",

            lastTitle:
                "قولنا أكتر عن نفسك 💜",

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

            continue:
                "كمّل",

            submit:
                "إرسال التقديم",

            successTitle:
                `تم استلام<br><span>التقديم! 🎉</span>`,

            successText:
                "شكرًا لتقديمك في TOFU Media. التيم هيقوم بمراجعة التقديم والتواصل معاك قريبًا.",

            nextTitle:
                "إيه اللي هيحصل بعد كده؟",

            nextText:
                "تابع الإيميل والواتساب بتوعك، ممكن التيم يتواصل معاك أثناء مرحلة الاختيار.",

            phoneError:
                "من فضلك اكتب رقم هاتف صحيح.",

            ageError:
                "السن لازم يكون من 11 لـ 30 سنة.",

            chooseDepartmentError:
                "من فضلك اختار التيم الأول.",

            sending:
                "جاري إرسال التقديم... ⏳",

            submitAgain:
                "إرسال التقديم 🚀",

            submitError:
                "حصل خطأ أثناء إرسال التقديم. اتأكد من الإنترنت وجرب تاني."
        }

    };


    /* =====================================================
       DEPARTMENT QUESTIONS
    ===================================================== */

    const questions = {

        "Research & Opportunities": {

            en: [
                "You found a scholarship online. What would you check before sharing it?",
                "Where would you search for reliable opportunities?",
                "How would you explain complicated requirements to students?",
                "What information should every opportunity post include?"
            ],

            ar: [
                "لقيت منحة أونلاين، إيه اللي هتتأكد منه قبل ما تنشرها؟",
                "هتدور فين على فرص موثوقة؟",
                "هتشرح شروط فرصة معقدة للطلاب إزاي؟",
                "إيه المعلومات اللي لازم تكون موجودة في أي بوست عن فرصة؟"
            ]
        },


        "Content Writing": {

            en: [
                "Write a short hook that would make a student stop scrolling.",
                "How would you explain a complicated scholarship simply?",
                "What makes social media content interesting and useful?",
                "What information would you include in a post about a free course?"
            ],

            ar: [
                "اكتب Hook يخلي الطالب يوقف الـ scrolling.",
                "هتشرح منحة معقدة بطريقة بسيطة إزاي؟",
                "إيه اللي بيخلي محتوى السوشيال interesting ومفيد؟",
                "إيه المعلومات اللي هتحطها في بوست عن كورس مجاني؟"
            ]
        },


        "Marketing": {

            en: [
                "Give us 3 ideas to promote a fully funded opportunity to students.",
                "How would you promote TOFU in a Facebook group without looking like spam?",
                "Which is more important: reaching many people or the right people?",
                "Give us one creative marketing idea for TOFU."
            ],

            ar: [
                "ادينا 3 أفكار تروّج بيها لفرصة ممولة بالكامل للطلاب.",
                "هتعمل Marketing لـ TOFU في جروب فيسبوك من غير Spam إزاي؟",
                "إيه الأهم: عدد كبير من الناس ولا الناس الصح؟",
                "ادينا فكرة Marketing Creative لـ TOFU."
            ]
        },


        "Graphic Design": {

            en: [
                "What design tools do you use?",
                "What information should stand out in a scholarship design?",
                "What makes a social media design professional?",
                "Do you have a portfolio or previous work?"
            ],

            ar: [
                "إيه أدوات التصميم اللي بتستخدمها؟",
                "إيه المعلومات اللي لازم تبان بوضوح في تصميم منحة؟",
                "إيه اللي بيخلي تصميم السوشيال Professional؟",
                "عندك Portfolio أو شغل سابق؟"
            ]
        },


        "Community": {

            en: [
                "A student asks a question and you don't know the answer. What would you do?",
                "How would you make students comfortable asking questions?",
                "What activities could keep the community active?",
                "How would you handle someone repeatedly breaking the rules?"
            ],

            ar: [
                "طالب سأل سؤال وإنت مش عارف الإجابة، هتعمل إيه؟",
                "إزاي تخلي الطلاب مرتاحين في السؤال؟",
                "إيه الأنشطة اللي ممكن تخلي الـ Community Active؟",
                "هتتعامل إزاي مع حد بيكرر مخالفة القواعد؟"
            ]
        },


        "PR & Partnerships": {

            en: [
                "How would you approach an organization for a collaboration?",
                "Write a short message introducing TOFU Media.",
                "What makes an organization interested in a partnership?",
                "How would you maintain a good relationship with a partner?"
            ],

            ar: [
                "هتتواصل مع Organization عشان Collaboration إزاي؟",
                "اكتب Message قصيرة تعرف فيها TOFU Media.",
                "إيه اللي يخلي Organization تهتم بـ Partnership؟",
                "إزاي تحافظ على علاقة كويسة مع Partner؟"
            ]
        },


        "HR": {

            en: [
                "A volunteer suddenly stops responding. What would you do?",
                "A team member repeatedly misses deadlines. What would you do?",
                "What qualities should a good volunteer have?",
                "How would you welcome a new volunteer?"
            ],

            ar: [
                "Volunteer فجأة بطل يرد، هتعمل إيه؟",
                "Team Member بيكرر التأخير عن الـ Deadline، هتعمل إيه؟",
                "إيه صفات الـ Volunteer الكويس؟",
                "إزاي ترحب بـ Volunteer جديد؟"
            ]
        }

    };


    /* =====================================================
       CHANGE LANGUAGE
    ===================================================== */

    function changeLanguage(lang) {

        if (!translations[lang]) return;

        currentLanguage = lang;

        document.documentElement.lang = lang;

        document.documentElement.dir =
            lang === "ar" ? "rtl" : "ltr";


        document
            .querySelectorAll("[data-i18n]")
            .forEach(function (element) {

                const key = element.dataset.i18n;

                if (translations[lang][key]) {

                    element.innerHTML =
                        translations[lang][key];
                }
            });


        document
            .querySelectorAll("[data-placeholder]")
            .forEach(function (element) {

                const key = element.dataset.placeholder;

                if (translations[lang][key]) {

                    element.placeholder =
                        translations[lang][key];
                }
            });


        const buttonText =
            lang === "en" ? "العربية" : "English";


        if (languageBtn) {
            languageBtn.textContent = buttonText;
        }

        if (languageBtn2) {
            languageBtn2.textContent = buttonText;
        }


        if (phoneError && phoneError.textContent) {

            phoneError.textContent =
                translations[lang].phoneError;
        }


        if (ageError && ageError.textContent) {

            ageError.textContent =
                translations[lang].ageError;
        }


        renderQuestions();
        updateProgress();
    }


    /* =====================================================
       LANGUAGE BUTTONS
    ===================================================== */

    if (languageBtn) {

        languageBtn.addEventListener("click", function () {

            changeLanguage(
                currentLanguage === "en"
                    ? "ar"
                    : "en"
            );

        });
    }


    if (languageBtn2) {

        languageBtn2.addEventListener("click", function () {

            changeLanguage(
                currentLanguage === "en"
                    ? "ar"
                    : "en"
            );

        });
    }


    /* =====================================================
       START
    ===================================================== */

    if (startBtn) {

        startBtn.addEventListener("click", function () {

            welcomeScreen.classList.remove("active");

            applicationScreen.classList.add("active");

            currentStep = 1;

            showStep(1);

            updateProgress();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }


    /* =====================================================
       SHOW STEP
    ===================================================== */

    function showStep(number) {

        steps.forEach(function (step) {

            step.classList.remove("active");

        });


        const target =
            document.querySelector(
                `.step[data-step="${number}"]`
            );


        if (target) {

            target.classList.add("active");
        }
    }


    /* =====================================================
       PROGRESS
    ===================================================== */

    function updateProgress() {

        const percentage =
            ((currentStep - 1) /
                (TOTAL_STEPS - 1)) * 100;


        progressBar.style.width =
            percentage + "%";


        percentText.textContent =
            Math.round(percentage) + "%";


        stepText.textContent =
            currentLanguage === "ar"
                ? `الخطوة ${currentStep} من ${TOTAL_STEPS}`
                : `Step ${currentStep} of ${TOTAL_STEPS}`;
    }


    /* =====================================================
       AGE VALIDATION
    ===================================================== */

    function validateAge() {

        if (!ageInput) return true;

        const age =
            Number(ageInput.value);


        if (!ageInput.value.trim()) {

            ageInput.setCustomValidity(
                currentLanguage === "ar"
                    ? "اكتب سنك."
                    : "Please enter your age."
            );

            ageInput.reportValidity();

            return false;
        }


        if (age < 11 || age > 30) {

            ageError.textContent =
                translations[currentLanguage].ageError;

            ageInput.classList.add("invalid-field");

            return false;
        }


        ageInput.setCustomValidity("");

        ageError.textContent = "";

        ageInput.classList.remove("invalid-field");

        return true;
    }


    if (ageInput) {

        ageInput.addEventListener("input", function () {

            ageError.textContent = "";

            ageInput.classList.remove("invalid-field");

            ageInput.setCustomValidity("");

        });
    }


    /* =====================================================
       PHONE VALIDATION
    ===================================================== */

    function validatePhone() {

        if (!iti) return true;


        if (!phoneInput.value.trim()) {

            phoneError.textContent =
                translations[currentLanguage].phoneError;

            phoneInput.classList.add("phone-invalid");

            return false;
        }


        if (!iti.isValidNumber()) {

            phoneError.textContent =
                translations[currentLanguage].phoneError;

            phoneInput.classList.add("phone-invalid");

            return false;
        }


        phoneError.textContent = "";

        phoneInput.classList.remove("phone-invalid");

        return true;
    }


    if (phoneInput) {

        phoneInput.addEventListener("input", function () {

            phoneError.textContent = "";

            phoneInput.classList.remove("phone-invalid");

        });
    }


    /* =====================================================
       VALIDATE STEP
    ===================================================== */

    function validateStep(step) {

        if (!step) return false;


        if (currentStep === 2) {

            if (!validateAge()) {
                return false;
            }

            if (!validatePhone()) {
                return false;
            }
        }


        const fields =
            step.querySelectorAll(
                "input[required], textarea[required], select[required]"
            );


        for (const field of fields) {

            if (field.id === "phone") {
                continue;
            }

            if (field.id === "age") {
                continue;
            }


            if (!field.checkValidity()) {

                field.reportValidity();

                return false;
            }
        }


        return true;
    }


    /* =====================================================
       NEXT BUTTONS
    ===================================================== */

    document
        .querySelectorAll(".next-btn")
        .forEach(function (button) {

            button.addEventListener("click", function () {

                const current =
                    document.querySelector(
                        `.step[data-step="${currentStep}"]`
                    );


                if (!validateStep(current)) {
                    return;
                }


                if (
                    currentStep === 3 &&
                    !selectedDepartment
                ) {

                    alert(
                        translations[currentLanguage]
                            .chooseDepartmentError
                    );

                    return;
                }


                if (currentStep < TOTAL_STEPS) {

                    currentStep++;

                    showStep(currentStep);

                    updateProgress();

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                }

            });

        });


    /* =====================================================
       BACK
    ===================================================== */

    if (backBtn) {

        backBtn.addEventListener("click", function () {

            if (currentStep > 1) {

                currentStep--;

                showStep(currentStep);

                updateProgress();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            } else {

                applicationScreen.classList.remove("active");

                welcomeScreen.classList.add("active");
            }

        });
    }


    /* =====================================================
       DEPARTMENT
    ===================================================== */

    departmentCards.forEach(function (card) {

        card.addEventListener("click", function () {

            departmentCards.forEach(function (item) {

                item.classList.remove("selected");

            });


            card.classList.add("selected");


            selectedDepartment =
                card.dataset.department;


            departmentInput.value =
                selectedDepartment;


            departmentNext.disabled = false;


            renderQuestions();

        });

    });


    /* =====================================================
       QUESTIONS
    ===================================================== */

    function renderQuestions() {

        if (!questionsContainer) return;


        if (!selectedDepartment) {

            questionsContainer.innerHTML = "";

            return;
        }


        const departmentQuestions =
            questions[selectedDepartment];


        if (!departmentQuestions) return;


        const currentQuestions =
            departmentQuestions[currentLanguage];


        questionsContainer.innerHTML = "";


        currentQuestions.forEach(function (question, index) {

            const wrapper =
                document.createElement("div");

            wrapper.className = "question";


            const label =
                document.createElement("label");

            label.className = "question-title";


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

            textarea.dataset.question =
                question;

            textarea.placeholder =
                currentLanguage === "ar"
                    ? "اكتب إجابتك هنا..."
                    : "Write your answer here...";


            wrapper.appendChild(label);

            wrapper.appendChild(textarea);

            questionsContainer.appendChild(wrapper);

        });
    }


    /* =====================================================
       SUBMIT
    ===================================================== */

    if (form) {

        form.addEventListener("submit", async function (event) {

            event.preventDefault();


            const lastStep =
                document.querySelector(
                    `.step[data-step="${TOTAL_STEPS}"]`
                );


            if (!validateStep(lastStep)) {
                return;
            }


            if (!selectedDepartment) {

                alert(
                    translations[currentLanguage]
                        .chooseDepartmentError
                );

                return;
            }


            if (!validatePhone()) {

                phoneInput.focus();

                return;
            }


            if (!validateAge()) {
                return;
            }


            const internationalPhone =
                iti
                    ? iti.getNumber()
                    : phoneInput.value.trim();


            const submitButton =
                form.querySelector(".submit-btn");


            if (submitButton) {

                submitButton.disabled = true;

                submitButton.innerHTML =
                    translations[currentLanguage].sending;
            }


            /* =================================================
               WEB3FORMS DATA
            ================================================= */

            const formData = new FormData();


            formData.append(
                "access_key",
                "4579e504-4006-4d59-99fb-ff7ff12f1fc1"
            );


            formData.append(
                "subject",
                `TOFU Media — New ${selectedDepartment} Application`
            );


            formData.append(
                "Full Name",
                document
                    .getElementById("name")
                    .value
                    .trim()
            );


            formData.append(
                "Age",
                document
                    .getElementById("age")
                    .value
                    .trim()
            );


            formData.append(
                "Governorate",
                document
                    .getElementById("governorate")
                    .value
                    .trim()
            );


            formData.append(
                "Email",
                document
                    .getElementById("email")
                    .value
                    .trim()
            );


            formData.append(
                "WhatsApp",
                internationalPhone
            );


            formData.append(
                "Country",
                iti
                    ? iti.getSelectedCountryData().name
                    : ""
            );


            formData.append(
                "Department",
                selectedDepartment
            );


            /* =================================================
               QUESTIONS
            ================================================= */

            const answerInputs =
                questionsContainer
                    ? questionsContainer.querySelectorAll("textarea")
                    : [];


            const departmentQuestions =
                questions[selectedDepartment];


            if (departmentQuestions) {

                const displayedQuestions =
                    departmentQuestions[currentLanguage];


                answerInputs.forEach(function (input, index) {

                    const questionText =
                        input.dataset.question ||
                        displayedQuestions[index];


                    formData.append(
                        `Question ${index + 1}`,
                        questionText
                    );


                    formData.append(
                        `Answer ${index + 1}`,
                        input.value.trim()
                    );

                });
            }


            /* =================================================
               FINAL QUESTIONS
            ================================================= */

            formData.append(
                "Why do you want to join TOFU?",
                document
                    .getElementById("whyTofu")
                    .value
                    .trim()
            );


            formData.append(
                "What can you add to TOFU?",
                document
                    .getElementById("contribution")
                    .value
                    .trim()
            );


            formData.append(
                "Weekly Commitment",
                document
                    .getElementById("hours")
                    .value
            );


            formData.append(
                "Application Language",
                currentLanguage === "ar"
                    ? "Arabic"
                    : "English"
            );


            /* =================================================
               SEND
            ================================================= */

            try {

                /* ---------------------------------------------
                   1. SEND TO WEB3FORMS
                --------------------------------------------- */

                const response =
                    await fetch(
                        "https://api.web3forms.com/submit",
                        {
                            method: "POST",
                            body: formData
                        }
                    );


                const data =
                    await response.json();


                if (!data.success) {

                    throw new Error(
                        data.message ||
                        "Web3Forms submission failed"
                    );
                }


                /* ---------------------------------------------
                   2. PREPARE GOOGLE SHEETS DATA
                --------------------------------------------- */

                const sheetData = {};


                formData.forEach(function (value, key) {

                    /*
                     * Web3Forms has access_key and subject.
                     * We don't need those inside the sheet.
                     */

                    if (
                        key === "access_key" ||
                        key === "subject"
                    ) {
                        return;
                    }


                    /*
                     * If a key already exists,
                     * keep all values.
                     */

                    if (sheetData[key] !== undefined) {

                        if (!Array.isArray(sheetData[key])) {

                            sheetData[key] = [
                                sheetData[key]
                            ];
                        }

                        sheetData[key].push(value);

                    } else {

                        sheetData[key] = value;
                    }

                });


                /* ---------------------------------------------
                   3. SEND TO GOOGLE SHEETS
                --------------------------------------------- */

                if (
                    GOOGLE_SHEETS_URL &&
                    !GOOGLE_SHEETS_URL.includes("PASTE_YOUR")
                ) {

                    await fetch(
                        GOOGLE_SHEETS_URL,
                        {
                            method: "POST",
                            mode: "no-cors",
                            headers: {
                                "Content-Type":
                                    "text/plain;charset=utf-8"
                            },
                            body:
                                JSON.stringify(sheetData)
                        }
                    );
                }


                /* ---------------------------------------------
                   SUCCESS
                --------------------------------------------- */

                applicationScreen.classList.remove("active");

                successScreen.classList.add("active");

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });


            } catch (error) {

                console.error(
                    "TOFU APPLICATION ERROR:",
                    error
                );


                alert(
                    translations[currentLanguage]
                        .submitError
                );


                if (submitButton) {

                    submitButton.disabled = false;

                    submitButton.innerHTML =
                        translations[currentLanguage]
                            .submitAgain;
                }
            }

        });
    }


    /* =====================================================
       INITIALIZE
    ===================================================== */

    changeLanguage("en");

    showStep(1);

    updateProgress();

});
