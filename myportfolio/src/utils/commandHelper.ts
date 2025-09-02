// utils/commandHelper.ts

// Liste de tes commandes valides
export const availableCommands = [
  "help",
  "about",
  "projects",
  "skills",
  "experience",
  "contact",
  "education",
  "clear"
];

// Fonction pour calculer la distance de Levenshtein
const levenshtein = (a: string, b: string): number => {
  const matrix = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) =>
      i === 0 ? j : j === 0 ? i : 0
    )
  );

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,     // suppression
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j - 1] + 1  // substitution
        );
      }
    }
  }

  return matrix[a.length][b.length];
};

// Trouver la commande la plus proche
export const findClosestCommand = (cmd: string): string | null => {
  let closest: string | null = null;
  let minDistance = Infinity;

  for (const c of availableCommands) {
    const dist = levenshtein(cmd, c);
    if (dist < minDistance) {
      minDistance = dist;
      closest = c;
    }
  }

  // Si trop éloigné (distance > 3), on ne suggère rien
  return minDistance <= 3 ? closest : null;
};
