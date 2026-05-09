const checks = [
  ['specific audience', /for\s+[a-z0-9\s-]{3,}/i, 'Name a specific user/customer segment.'],
  ['clear workflow', /(automate|summari[sz]e|generate|classify|route|answer|score|detect|extract|schedule|book|call|email)/i, 'Define the job the product performs.'],
  ['bounded channel', /(web|mobile|chrome|slack|whatsapp|telegram|email|voice|crm|dashboard|api)/i, 'Pick one primary channel for v1.'],
  ['measurable outcome', /(save|reduce|increase|book|convert|resolve|hours|cost|revenue|leads|tickets|calls|%|percent)/i, 'Add a measurable outcome.'],
  ['data/input source', /(csv|pdf|call|transcript|database|crm|email|website|form|docs|tickets|recordings)/i, 'State the input data source.']
];

document.getElementById('score').addEventListener('click', () => {
  const idea = document.getElementById('idea').value.trim();
  const result = document.getElementById('result');
  if (!idea) {
    result.innerHTML = '<strong>Start with one sentence.</strong><br>Example: AI voice receptionist for dental clinics that books appointments from phone calls.';
    return;
  }
  const passed = checks.filter(([_, rx]) => rx.test(idea));
  const missing = checks.filter(([_, rx]) => !rx.test(idea));
  const score = Math.round((passed.length / checks.length) * 100);
  result.innerHTML = `<strong>Scope score: ${score}/100</strong>` +
    `<p>${score >= 80 ? 'Looks buildable for a tight MVP.' : score >= 50 ? 'Promising, but sharpen the scope before build.' : 'Too vague. Tighten the problem before writing code.'}</p>` +
    (missing.length ? `<p>Missing:</p><ul>${missing.map(x => `<li>${x[2]}</li>`).join('')}</ul>` : '<p>Next step: turn this into screens, data flows, and acceptance criteria.</p>');
});
