const data =  [
    {
      id: 1,
      text: "لقد كلفك محمود خليل بمشروع تصميم مواقع الويب من موقع",
      user: "محمود خليل",
      avatar: "https://avatar.iran.liara.run/public/boy",
      date: "منذ 9 ساعات",
      type: "assignment",
      comments: [
        {
          user: {
            name: "عمر خالد",
            avatar: "https://avatar.iran.liara.run/public/boy",
          },
          content:
            "مرحبًا أسماء، يرجى التحقق من ذلك والتأكد من إمكانية الوصول إلى جميع عناوين URL",
          date: "28 يناير، 2024",
          id: 1,
        },
        {
          id: 2,
          user: {
            name: "ليلى محمد",
            avatar: "https://avatar.iran.liara.run/public/boy",
          },
          content:
            "مرحبًا @Abdelsalam، ملف figma الخاص بالعميل معطل وأحتاج إلى إذن للوصول إلى google drive. هل يمكنك مساعدتي في هذا الأمر؟ 😃",
          date: "28 يناير، 2024",
        },
      ],
    },
    {
      id: 2,
      text: "علق سعد ديان على مهمة خيارات الشعار",
      user: "سعد ديان",
      avatar: "https://avatar.iran.liara.run/public/boy",
      date: "منذ 1 يوم",
      type: "assignment",
      comments: [
        {
          id: 1,
          user: {
            name: "خالد إبراهيم",
            avatar: "https://avatar.iran.liara.run/public/boy",
          },
          content: "سيتم متابعة الحالة خلال الأسبوع القادم",
          date: "28 يناير، 2024",
        },
        {
          user: {
            name: "عمر خالد",
            avatar: "https://avatar.iran.liara.run/public/boy",
          },
          content:
            "مرحبًا أسماء، يرجى التحقق من ذلك والتأكد من إمكانية الوصول إلى جميع عناوين URL",
          date: "28 يناير، 2024",
          id: 2,
        },
        {
          id: 3,
          user: {
            name: "ليلى محمد",
            avatar: "https://avatar.iran.liara.run/public/boy",
          },
          content:
            "مرحبًا @Abdelsalam، ملف figma الخاص بالعميل معطل وأحتاج إلى إذن للوصول إلى google drive. هل يمكنك مساعدتي في هذا الأمر؟ 😃",
          date: "28 يناير، 2024",
        },
        {
          user: {
            name: "عمر خالد",
            avatar: "https://avatar.iran.liara.run/public/boy",
          },
          content:
            "مرحبًا أسماء، يرجى التحقق من ذلك والتأكد من إمكانية الوصول إلى جميع عناوين URL",
          date: "28 يناير، 2024",
          id: 2,
        },
      ],
    },
    {
      id: 3,
      text: "ليان الشمري ذكرتك في تعليق مهمة About Us Illustration",
      user: "ليان الشمري",
      avatar: "https://avatar.iran.liara.run/public/boy",
      date: "28 يناير، 2024",
      type: "status",
      comments: [
        {
          user: {
            name: "عمر خالد",
            avatar: "https://avatar.iran.liara.run/public/boy",
          },
          content:
            "مرحبًا أسماء، يرجى التحقق من ذلك والتأكد من إمكانية الوصول إلى جميع عناوين URL",
          date: "28 يناير، 2024",
          id: 1,
        },
        {
          id: 2,
          user: {
            name: "ليلى محمد",
            avatar: "https://avatar.iran.liara.run/public/boy",
          },
          content:
            "مرحبًا @Abdelsalam، ملف figma الخاص بالعميل معطل وأحتاج إلى إذن للوصول إلى google drive. هل يمكنك مساعدتي في هذا الأمر؟ 😃",
          date: "28 يناير، 2024",
        },
        {
          id: 3,
          user: {
            name: "ليان الشمري",
            avatar: "https://avatar.iran.liara.run/public/boy",
          },
          content: "تم تحديث الرسم البياني للمشروع",
          date: "28 يناير، 2024",
        },
        {
          user: {
            name: "عمر خالد",
            avatar: "https://avatar.iran.liara.run/public/boy",
          },
          content:
            "مرحبًا أسماء، يرجى التحقق من ذلك والتأكد من إمكانية الوصول إلى جميع عناوين URL",
          date: "28 يناير، 2024",
          id: 2,
        },
      ],
    },
    {
      id: 4,
      text: "فارس العنزي دعى ياسر الدوسري إلى مساحة العمل هذه.",
      user: "فارس العنزي",
      avatar: "https://avatar.iran.liara.run/public/boy",
      date: "28 يناير، 2024",
      type: "status",
      comments: [
        {
          user: {
            name: "عمر خالد",
            avatar: "https://avatar.iran.liara.run/public/boy",
          },
          content:
            "مرحبًا أسماء، يرجى التحقق من ذلك والتأكد من إمكانية الوصول إلى جميع عناوين URL",
          date: "28 يناير، 2024",
          id: 1,
        },
        {
          id: 2,
          user: {
            name: "ياسر الدوسري",
            avatar: "https://avatar.iran.liara.run/public/boy",
          },

          content: "سأكون هناك في الساعة 2:00 مساءً",
          date: "28 يناير، 2024",
        },
        {
          user: {
            name: "عمر خالد",
            avatar: "https://avatar.iran.liara.run/public/boy",
          },
          content:
            "مرحبًا أسماء، يرجى التحقق من ذلك والتأكد من إمكانية الوصول إلى جميع عناوين URL",
          date: "28 يناير، 2024",
          id: 3,
        },
      ],
    },
    {
      id: 5,
      text: "تركي البدر حوّل حالة هذه المهمة Homepag إلى مكتملة.",
      user: "تركي البدر",
      avatar: "https://avatar.iran.liara.run/public/boy",
      date: "28 يناير، 2024",
      type: "status",
      comments: [
        {
          id: 1,
          user: {
            name: "تركي البدر",
            avatar: "https://avatar.iran.liara.run/public/boy",
          },
          content: "تم تحديث الرسم البياني للمشروع",
          date: "28 يناير، 2024",
        },
        {
          id: 2,
          user: {
            name: "ليان الشمري",
            avatar: "https://avatar.iran.liara.run/public/boy",
          },
          content: "تم تحديث الرسم البياني للمشروع",
          date: "28 يناير، 2024",
        },
      ],
    },
    {
      id: 6,
      text: "ليان الشمري تحدد موعد تسليم مهمة الطلبات المتابعة في 13 فبراير 2024",
      user: "ليان الشمري",
      avatar: "https://avatar.iran.liara.run/public/boy",
      date: "28 يناير، 2024",
      type: "deadline",
      comments: [
        {
          id: 1,
          user: {
            name: "تركي البدر",
            avatar: "https://avatar.iran.liara.run/public/boy",
          },
          content: "تم تحديث الرسم البياني للمشروع",
          date: "28 يناير، 2024",
        },
        {
          id: 2,
          user: {
            name: "ليان الشمري",
            avatar: "https://avatar.iran.liara.run/public/boy",
          },
          content: "تم تحديث الرسم البياني للمشروع",
          date: "28 يناير، 2024",
        },
      ],
    },
    {
      id: 7,
      text: "أنشأت مهند السبيعي مهمة Moodboarding لمشروع Carl UI/UX",
      user: "مهند السبيعي",
      avatar: "https://avatar.iran.liara.run/public/boy",
      date: "28 يناير، 2024",
      type: "task_creation",
      comments: [
        {
          id: 1,
          user: {
            name: "مهند السبيعي",
            avatar: "https://avatar.iran.liara.run/public/boy",
          },
          content: "تم تحديث الرسم البياني للمشروع",
          date: "28 يناير، 2024",
        },
        {
          id: 2,
          user: {
            name: "تركي البدر",
            avatar: "https://avatar.iran.liara.run/public/boy",
          },
          content: "تم تحديث الرسم البياني للمشروع",
          date: "28 يناير، 2024",
        },
      ],
    },
    {
      id: 8,
      text: "لقد دعاك عمر الغامدي إلى مشروع لوحة تحكم Resto",
      user: "عمر الغامدي",
      avatar: "https://avatar.iran.liara.run/public/boy",
      date: "19 مارس، 2024",
      type: "status",
      comments: [
        {
          id: 1,
          user: {
            name: "تركي البدر",
            avatar: "https://avatar.iran.liara.run/public/boy",
          },
          content: "تم تحديث الرسم البياني للمشروع",
          date: "28 يناير، 2024",
        },
        {
          id: 2,
          user: {
            name: "خالد إبراهيم",
            avatar: "https://avatar.iran.liara.run/public/boy",
          },
          content: "سيتم متابعة الحالة خلال الأسبوع القادم",
          date: "28 يناير، 2024",
        },
      ],
    },
    {
      id: 9,
      text: "قام خالد الزهراني بإزالتك من مشروع Pink AI",
      user: "خالد الزهراني",
      avatar: "https://avatar.iran.liara.run/public/boy",
      date: "منذ 9 ساعات",
      type: "removal",
      comments: [
        {
          user: {
            name: "عمر خالد",
            avatar: "https://avatar.iran.liara.run/public/boy",
          },
          content: "تم التحقق من المشكلة وإصلاحها",
          date: "28 يناير، 2024",
          id: 1,
        },
        {
          id: 2,
          user: {
            name: "ليلى محمد",
            avatar: "https://avatar.iran.liara.run/public/boy",
          },
          content: "يرجى التأكد من فحص نظام التبريد أيضًا",
          date: "28 يناير، 2024",
        },
      ],
    },
];
export default data;
  