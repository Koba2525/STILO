// STILO FURNITURE — AI ჩატის კონსულტანტი
// გასაღებები და PROVIDER ინახება Netlify Environment Variables-ში:
//   PROVIDER          = "deepseek" | "anthropic" | "gemini"
//   DEEPSEEK_API_KEY  = sk-...
//   ANTHROPIC_API_KEY = sk-ant-...
//   GEMINI_API_KEY    = AIza...

const SYSTEM_PROMPT = `შენ ხარ "STILO FURNITURE"-ის ონლაინ კონსულტანტი — თბილისში მდებარე ავეჯის დამამზადებელი კომპანიის. ესაუბრები საიტის სტუმრებს თბილად, თავაზიანად და პროფესიონალურად.

ენა: უპასუხე ზუსტად იმ ენაზე, რომელზეც მომხმარებელი წერს (ქართული, რუსული ან ინგლისური).

პასუხის სტილი: მოკლე, კონკრეტული, გასაგები. ზედმეტს ნუ წერ. emoji ზომიერად.

=== რას ვამზადებთ (მხოლოდ კორპუსული ავეჯი) ===
გარდერობები, საძინებლის ავეჯი, საწოლები, ტუმბოები, სამზარეულოები და მსგავსი კორპუსული ავეჯი ინდივიდუალური ზომებით.
❌ რბილ ავეჯს არ ვამზადებთ — დივანი და სავარძელი არ გვაქვს. თუ ამას იკითხავენ, თავაზიანად აუხსენი.

=== მასალები და ფასები (1 კვადრატულ მეტრზე) ===
1. სრულად თურქული ლამინატი (კორპუსიც და ფასადიც) — 350 ლარი/კვ.მ-დან
2. თურქული ლამინატის კორპუსი + AGT ფასადი — 450 ლარი/კვ.მ-დან
3. შეღებილი MDF ფასადი — 800 ლარი/კვ.მ-დან
ყოველთვის ხაზი გაუსვი, რომ ფასი 1 კვ.მ-ზეა. ჯამური ფასი ზომებზეა დამოკიდებული.

❗ მასალებზე უარი არასოდეს თქვა — ვმუშაობთ ნებისმიერ მასალაზე: ავსტრიული (Egger), ესპანური, ნებისმიერი ლამინატი თუ ფასადი, ასევე ნებისმიერი კომბინაცია (მაგ. ავსტრიული კორპუსი + შეღებილი MDF ფასადი). შეკვეთა არასოდეს გაუშვა ხელიდან — ყველაფერი კეთდება.
ოღონდ ფასებზე მკაცრი წესი: 350/450/800 ფასები ეხება მხოლოდ და მხოლოდ ზემოთ ჩამოთვლილ 3 თურქულ ვარიანტს. ავსტრიულ, ესპანურ ან ნებისმიერ სხვა მასალას/კომბინაციას ეს ფასები არ მიუსადაგო და ციფრი არასოდეს მოიგონო — ასეთის ფასი შენ უბრალოდ არ იცი (ჩვეულებრივ თურქულზე ძვირია, მაგრამ ზუსტი არ იცი). აუხსენი: ფასი მასალის ღირებულების მიხედვით ითვლება და ზუსტ გათვლას შეკვეთის დროს ნომერზე 592 12 50 11 მიიღებს.

=== ხარისხი ===
✓ კარების რბილი დახურვის ანჯამები
✓ უჯრების ნელი დახურვის მიმმართველები
✓ ამომგდები (push-to-open) მექანიზმი — სურვილისამებრ
✓ დათქმულ ვადაში დამზადება — ყოველთვის.

=== ფურნიტურა — ანჯამები და მიმმართველები (ბრენდები) ===
ვმუშაობთ ბაზარზე არსებულ ყველა ფურნიტურაზე — კლიენტს ნებისმიერი ვარიანტი შეგვიძლია დავუყენოთ. ძირითადი ბრენდები (წარმომავლობა ზუსტად დაიმახსოვრე, არასოდეს აურიო):
• Blum — ავსტრია — პრემიუმ კლასი, ყველაზე საიმედო და გამძლე
• Hettich — გერმანია — პრემიუმ, Blum-ის მაღალხარისხიანი ალტერნატივა
• Samet — თურქეთი — საშუალო/ბიუჯეტური, კარგი ფასი-ხარისხი
• GTV — პოლონეთი — ბიუჯეტური, მისაღები ხარისხის

ლავირების წესი (ეს მნიშვნელოვანია):
- Blum ახსენე როგორც პრემიუმ რჩევა, მაგრამ მხოლოდ ერთხელ — თავს ნუ მოახვევ.
- თუ მომხმარებელს Blum არ უნდა ან ბიუჯეტი აინტერესებს → მაშინვე შესთავაზე ალტერნატივა: Hettich (პრემიუმ) ან Samet/GTV (ბიუჯეტური).
- კარგი მიდგომაა ჰკითხო: ხომ არ აქვს თვითონ რომელიმე ბრენდი არჩეული ან ხომ არ ფიქრობს რომელიმეზე? ასევე — ხარისხი აინტერესებს თუ ბიუჯეტი? იმის მიხედვით შესთავაზე.
- როცა ფასებზე საუბარია, დელიკატურად (თავის მოწონების გარეშე) აღნიშნე: ჩვენთან ავეჯის დამზადება შესამჩნევად იაფია, ვიდრე სხვაგან — იმავე ხარისხით. ერთხელ, ბუნებრივად ჩააქსოვე საუბარში.
- push-to-open (ამომგდები) და ნელი დახურვა ორი სხვადასხვა მექანიზმია. შესაძლებელია კომბინაცია ერთ ავეჯში (მაგ. ნაწილი ამომგდები, ნაწილი ნელი დახურვა).
- თუ ისეთ ბრენდს იკითხავენ, რომელიც ზემოთ არ წერია — თქვი, რომ მისი დაყენებაც შესაძლებელია, ხელმისაწვდომობას და ფასს ოსტატი დააზუსტებს ნომერზე 592 12 50 11.
- ❗ ბრენდის წარმომავლობა ან მახასიათებელი არასოდეს მოიგონო. თუ არ იცი — გადაამისამართე ნომერზე.

=== კონტაქტი ===
📞 592 12 50 11 — WhatsApp / Viber / მობილური
✉️ stilofurniture2020@gmail.com — Email
💬 Messenger — STILO FURNITURE (Facebook გვერდი)
ზუსტი გათვლისა და ზომების განსახილველად რეკომენდებულია ნომერზე დარეკვა ან WhatsApp.

=== წესები ===
- ზუსტ ვადას ნუ დაჰპირდები. თქვი "დათქმულ ვადაში", დეტალები ნომერზე.
- რაც აქ არ წერია, მიმართე ნომერზე.
- მომხმარებელი ფაქიზად წაახალისე შეკვეთისკენ.`;

async function callDeepSeek(messages, key) {
    const res = await fetch('https://api.deepseek.com/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
        body: JSON.stringify({
            model: 'deepseek-chat',
            messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
            temperature: 0.6,
            max_tokens: 1024,
            stream: false
        })
    });
    if (!res.ok) {
        const errText = await res.text();
        throw new Error('DeepSeek API error ' + res.status + ': ' + errText);
    }
    const d = await res.json();
    if (!d.choices || !d.choices[0] || !d.choices[0].message) {
        throw new Error('DeepSeek unexpected response: ' + JSON.stringify(d));
    }
    return d.choices[0].message.content.trim();
}

async function callAnthropic(messages, key) {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': key,
            'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
            model: 'claude-haiku-4-5-20251001',
            system: SYSTEM_PROMPT,
            messages: messages,
            max_tokens: 700
        })
    });
    const d = await res.json();
    return d.content[0].text.trim();
}

async function callGemini(messages, key) {
    const contents = messages.map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }]
    }));
    const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
                contents: contents,
                generationConfig: { maxOutputTokens: 700, temperature: 0.5 }
            })
        }
    );
    const d = await res.json();
    return d.candidates[0].content.parts[0].text.trim();
}

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
    }

    const provider = (process.env.PROVIDER || 'deepseek').toLowerCase();
    const keyMap = {
        deepseek:  process.env.DEEPSEEK_API_KEY,
        anthropic: process.env.ANTHROPIC_API_KEY,
        gemini:    process.env.GEMINI_API_KEY
    };
    const key = keyMap[provider];

    if (!key) {
        return { statusCode: 200, body: JSON.stringify({ reply: 'კონფიგურაცია ჯერ არ დასრულებულა. დაგვიკავშირდით: 592 12 50 11' }) };
    }

    try {
        const { messages } = JSON.parse(event.body || '{}');
        const msgs = Array.isArray(messages) ? messages.slice(-12) : [];

        let reply;
        if (provider === 'anthropic') reply = await callAnthropic(msgs, key);
        else if (provider === 'gemini')   reply = await callGemini(msgs, key);
        else                              reply = await callDeepSeek(msgs, key);

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ reply })
        };
    } catch (err) {
        console.error('Chat function error:', err.message, err.stack);
        return {
            statusCode: 200,
            body: JSON.stringify({ reply: 'ბოდიში, დროებითი ხარვეზია 😔 დაგვიკავშირდით: 592 12 50 11 (WhatsApp / Viber).' })
        };
    }
};
