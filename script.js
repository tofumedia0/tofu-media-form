document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       ELEMENTS
    ========================= */

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

    const departmentCards = document.querySelectorAll(".department");
    const departmentInput = document.getElementById("department");
    const departmentNext = document.getElementById("departmentNext");

    const questionsContainer =
        document.getElementById("questionsContainer");

    const challengeTitle =
        document.getElementById("challengeTitle");


    /* =========================
       VARIABLES
    ========================= */

    let currentStep = 1;
    let currentLanguage = "en";
    let selectedDepartment = "";


    const TOTAL_STEPS = 5;


    /* =========================
       TRANSLATIONS
    ========================= */

    const translations = {

        en: {

            season: "TOFU MEDIA — SEASON 2",

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
                `Application<br><span>received! 🎉</span>`,

            successText:
                "Thank you for applying to TOFU Media. Our team will review your application and contact you soon.",

            nextTitle:
                "What happens next?",

            nextText:
                "Keep an eye on your email and WhatsApp. Our team may contact you during the selection process."

        },


        ar: {

            season:
                "TOFU MEDIA — السيزون الثاني",

            welcomeTitle:
                `خلينا نخلي<br><span>الفرص توصل لمستحقيها.</span>`,

            welcomeText:
                "ساعدنا نوصل الشباب بالمنح والكورسات المجانية والمسابقات والإيفنتات والفرص المختلفة.",

            start:
                "ابدئي التقديم",

            hint:
                "التقديم مش هياخد غير كام دقيقة.",

            getToKnow:
                "خلينا نتعرف عليك",

            nameTitle:
                "اسمك إيه؟ 👋",

            nameDescription:
                "اكتبي اسمك بالكامل.",

            fullName:
                "الاسم بالكامل",

            aboutYou:
                "عن نفسك",

            aboutTitle:
                "قوليلنا شوية عن نفسك 🎓",

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
                "اختاري التيم",

            departmentTitle:
                "شايفة نفسك فين؟ 🎯",

            departmentDescription:
                "اختاري المجال الأقرب لمهاراتك واهتماماتك.",

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
                "قوليلنا أكتر عنك 💜",

            lastDescription:
                "خليكي صريحة. إحنا مهتمين بطريقة تفكيرك أكتر من إن إجابتك تكون مثالية.",

            whyTofu:
                "ليه عايزة تنضمي لـ TOFU Media؟",

            contribution:
                "إيه اللي تقدري تضيفيه لـ TOFU Media؟",

            hours:
                "تقدري تلتزمي بكام ساعة أسبوعيًا؟",

            choose:
                "اختاري",

            submit:
                "إرسال التقديم",

            successTitle:
                `تم استلام<br><span>التقديم! 🎉</span>`,

            successText:
                "شكرًا لتقديمك في TOFU Media. التيم هيقوم بمراجعة التقديم والتواصل معاكي قريبًا.",

            nextTitle:
                "إيه اللي هيحصل بعد كده؟",

            nextText:
                "تابعي الإيميل والواتساب بتوعك، ممكن التيم يتواصل معاكي أثناء مرحلة الاختيار."

        }

    };


    /* =========================
       QUESTIONS
    ========================= */

    const questions = {

        "Research & Opportunities": {
            en: [
                "You found a scholarship online. What would you check before sharing it?",
                "Where would you search for reliable opportunities?",
                "How would you explain complicated requirements to students?",
                "What information should every opportunity post include?"
            ],
            ar: [
                "لقيتي منحة أونلاين، إيه اللي هتتأكدي منه قبل ما تنشريها؟",
                "هتدوري فين على فرص موثوقة؟",
                "هتشرحي شروط فرصة معقدة للطلاب إزاي؟",
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
                "اكتبي Hook يخلي الطالب يوقف الـ scrolling.",
                "هتشرحي منحة معقدة بطريقة بسيطة إزاي؟",
                "إيه اللي بيخلي محتوى السوشيال interesting ومفيد؟",
                "إيه المعلومات اللي هتحطيها في بوست عن كورس مجاني؟"
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
                "ادينا 3 أفكار تروجي بيها لفرصة ممولة بالكامل للطلاب.",
                "هتعملي Marketing لـ TOFU في جروب فيسبوك من غير Spam إزاي؟",
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
                "إيه أدوات التصميم اللي بتستخدميها؟",
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
                "طالب سأل سؤال وإنتِ مش عارفة الإجابة، هتعملي إيه؟",
                "إزاي تخلي الطلاب مرتاحين في السؤال؟",
                "إيه الأنشطة اللي ممكن تخلي الـ Community Active؟",
                "هتتعاملي إزاي مع حد بيكرر مخالفة القواعد؟"
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
                "هتتواصلي مع Organization عشان Collaboration إزاي؟",
                "اكتبي Message قصيرة تعرفي فيها TOFU Media.",
                "إيه اللي يخلي Organization تهتم بـ Partnership؟",
                "إزاي تحافظي على علاقة كويسة مع Partner؟"
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
                "Volunteer فجأة بطل يرد، هتعملي إيه؟",
                "Team Member بيكرر التأخير عن الـ Deadline، هتعملي إيه؟",
                "إيه صفات الـ Volunteer الكويس؟",
                "إزاي ترحبي بـ Volunteer جديد؟"
            ]
        }

    };


    /* =========================
       CHANGE LANGUAGE
    ========================= */

    function changeLanguage(lang) {

        currentLanguage = lang;

        document.documentElement.lang = lang;

        document.documentElement.dir =
            lang === "ar" ? "rtl" : "ltr";


        document.querySelectorAll("[data-i18n]")
            .forEach(element => {

                const key = element.dataset.i18n;

                if (
                    translations[lang] &&
                    translations[lang][key]
                ) {
                    element.innerHTML =
                        translations[lang][key];
                }

            });


        document.querySelectorAll("[data-placeholder]")
            .forEach(element => {

                const key = element.dataset.placeholder;

                if (
                    translations[lang] &&
                    translations[lang][key]
                ) {
                    element.placeholder =
                        translations[lang][key];
                }

            });


        const buttonText =
            lang === "en"
                ? "العربية"
                : "English";


        if (languageBtn) {
            languageBtn.textContent = buttonText;
        }

        if (languageBtn2) {
            languageBtn2.textContent = buttonText;
        }


        renderQuestions();

        updateProgress();
    }


    /* =========================
       LANGUAGE BUTTONS
    ========================= */

    if (languageBtn) {

        languageBtn.addEventListener(
            "click",
            function () {

                changeLanguage(
                    currentLanguage === "en"
                        ? "ar"
                        : "en"
                );

            }
        );

    }


    if (languageBtn2) {

        languageBtn2.addEventListener(
            "click",
            function () {

                changeLanguage(
                    currentLanguage === "en"
                        ? "ar"
                        : "en"
                );

            }
        );

    }


    /* =========================
       START APPLICATION
    ========================= */

    if (startBtn) {

        startBtn.addEventListener(
            "click",
            function () {

                welcomeScreen.classList.remove("active");

                applicationScreen.classList.add("active");

                currentStep = 1;

                showStep(1);

                updateProgress();

                window.scrollTo(0, 0);

            }
        );

    }


    /* =========================
       SHOW STEP
    ========================= */

    function showStep(number) {

        steps.forEach(step => {
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


    /* =========================
       PROGRESS
    ========================= */

    function updateProgress() {

        const percentage =
            (currentStep / TOTAL_STEPS) * 100;


        if (progressBar) {
            progressBar.style.width =
                percentage + "%";
        }


        if (percentText) {
            percentText.textContent =
                Math.round(percentage) + "%";
        }


        if (stepText) {

            stepText.textContent =
                currentLanguage === "ar"
                    ? `الخطوة ${currentStep} من ${TOTAL_STEPS}`
                    : `Step ${currentStep} of ${TOTAL_STEPS}`;

        }

    }


    /* =========================
       NEXT BUTTONS
    ========================= */

    document.querySelectorAll(".next-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    const current =
                        document.querySelector(
                            `.step[data-step="${currentStep}"]`
                        );


                    if (!validateStep(current)) {
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

                }
            );

        });


    /* =========================
       BACK BUTTON
    ========================= */

    if (backBtn) {

        backBtn.addEventListener(
            "click",
            function () {

                if (currentStep > 1) {

                    currentStep--;

                    showStep(currentStep);

                    updateProgress();

                } else {

                    applicationScreen.classList.remove("active");

                    welcomeScreen.classList.add("active");

                }

            }
        );

    }


    /* =========================
       DEPARTMENTS
    ========================= */

    departmentCards.forEach(card => {

        card.addEventListener(
            "click",
            function () {

                departmentCards.forEach(item => {
                    item.classList.remove("selected");
                });


                card.classList.add("selected");


                selectedDepartment =
                    card.dataset.department;


                if (departmentInput) {
                    departmentInput.value =
                        selectedDepartment;
                }


                if (departmentNext) {
                    departmentNext.disabled = false;
                }


                renderQuestions();

            }
        );

    });


    /* =========================
       QUESTIONS
    ========================= */

    function renderQuestions() {

        if (!questionsContainer) return;

        if (!selectedDepartment) return;


        const departmentQuestions =
            questions[selectedDepartment];


        if (!departmentQuestions) return;


        const currentQuestions =
            departmentQuestions[currentLanguage];


        questionsContainer.innerHTML = "";


        currentQuestions.forEach(
            function (question, index) {

                const wrapper =
                    document.createElement("div");

                wrapper.className = "question";


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
                    "challenge_" + (index + 1);

                textarea.placeholder =
                    currentLanguage === "ar"
                        ? "اكتبي إجابتك هنا..."
                        : "Write your answer here...";


                wrapper.appendChild(label);

                wrapper.appendChild(textarea);

                questionsContainer.appendChild(wrapper);

            }
        );

    }


    /* =========================
       VALIDATION
    ========================= */

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

                return false;

            }

        }


        return true;

    }


    /* =========================
       SUBMIT
    ========================= */

    if (form) {

        form.addEventListener(
            "submit",
            async function (event) {

                event.preventDefault();


                if (!validateStep(
                    document.querySelector(
                        `.step[data-step="${TOTAL_STEPS}"]`
                    )
                )) {
                    return;
                }


                const phone =
                    document.getElementById("phone").value.trim();


                if (!/^01[0125][0-9]{8}$/.test(phone)) {

                    alert(
                        currentLanguage === "ar"
                            ? "اكتبي رقم واتساب مصري صحيح مكون من 11 رقم."
                            : "Please enter a valid Egyptian WhatsApp number."
                    );

                    currentStep = 2;

                    showStep(2);

                    updateProgress();

                    return;

                }


                const submitButton =
                    form.querySelector(".submit-btn");


                submitButton.disabled = true;


                submitButton.innerHTML =
                    currentLanguage === "ar"
                        ? "جاري الإرسال..."
                        : "Sending...";


                const formData =
                    new FormData();


                /*
                   Web3Forms
                */

                formData.append(
                    "access_key",
                    "4579e504-4006-4d59-99fb-ff7ff12f1fc1"
                );


                formData.append(
                    "subject",
                    "TOFU Media Application - " +
                    selectedDepartment
                );


                formData.append(
                    "Full Name",
                    document.getElementById("name").value
                );


                formData.append(
                    "Age",
                    document.getElementById("age").value
                );


                formData.append(
                    "Governorate",
                    document.getElementById("governorate").value
                );


                formData.append(
                    "Email",
                    document.getElementById("email").value
                );


                formData.append(
                    "WhatsApp",
                    phone
                );


                formData.append(
                    "Department",
                    selectedDepartment
                );


                const answerInputs =
                    questionsContainer.querySelectorAll("textarea");


                answerInputs.forEach(
                    function (input, index) {

                        formData.append(
                            "Challenge " + (index + 1),
                            input.value
                        );

                    }
                );


                formData.append(
                    "Why TOFU",
                    document.getElementById("whyTofu").value
                );


                formData.append(
                    "Contribution",
                    document.getElementById("contribution").value
                );


                formData.append(
                    "Weekly Commitment",
                    document.getElementById("hours").value
                );


                try {

                    const response =
                        await fetch(
                            "https://api.web3forms.com/submit",
                            {
                                method: "POST",
                                body: formData
                            }
                        );


                    const result =
                        await response.json();


                    if (result.success) {

                        applicationScreen.classList.remove("active");

                        successScreen.classList.add("active");

                        window.scrollTo(0, 0);

                    } else {

                        throw new Error(
                            result.message
                        );

                    }

                } catch (error) {

                    console.error(error);

                    alert(
                        currentLanguage === "ar"
                            ? "حصل خطأ أثناء الإرسال، جربي تاني."
                            : "Something went wrong. Please try again."
                    );


                    submitButton.disabled = false;

                    submitButton.innerHTML =
                        currentLanguage === "ar"
                            ? "إرسال التقديم 🚀"
                            : "Submit Application 🚀";

                }

            }
        );

    }


    /* =========================
       START IN ENGLISH
    ========================= */

    changeLanguage("en");

    showStep(1);

});
