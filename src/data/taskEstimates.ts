import { TaskCategory } from '../types';

export const taskEstimates: Record<string, { category: TaskCategory; minutes: number; tips?: string }> = {
  // Cleaning tasks
  'vacuum living room': { category: 'cleaning', minutes: 15, tips: 'Move furniture for best results' },
  'vacuum bedroom': { category: 'cleaning', minutes: 10 },
  'vacuum stairs': { category: 'cleaning', minutes: 8 },
  'mop kitchen floor': { category: 'cleaning', minutes: 12, tips: 'Sweep first for best results' },
  'mop bathroom floor': { category: 'cleaning', minutes: 8 },
  'clean bathroom': { category: 'cleaning', minutes: 25, tips: 'Start with toilet, then sink, finally shower' },
  'clean kitchen counters': { category: 'cleaning', minutes: 8 },
  'clean stovetop': { category: 'cleaning', minutes: 12 },
  'clean microwave': { category: 'cleaning', minutes: 5 },
  'wipe down appliances': { category: 'cleaning', minutes: 10 },
  'dust living room': { category: 'cleaning', minutes: 15 },
  'dust bedroom': { category: 'cleaning', minutes: 10 },
  'clean windows': { category: 'cleaning', minutes: 20 },
  'organize closet': { category: 'organization', minutes: 45 },
  'make beds': { category: 'organization', minutes: 5 },
  
  // Laundry tasks
  'wash clothes': { category: 'laundry', minutes: 5, tips: 'Sort by colors and fabric type' },
  'dry clothes': { category: 'laundry', minutes: 3 },
  'fold laundry': { category: 'laundry', minutes: 20 },
  'iron clothes': { category: 'laundry', minutes: 25 },
  'put away laundry': { category: 'laundry', minutes: 10 },

  // Cooking tasks
  'meal prep': { category: 'cooking', minutes: 60, tips: 'Prepare ingredients first' },
  'cook dinner': { category: 'cooking', minutes: 45 },
  'cook breakfast': { category: 'cooking', minutes: 15 },
  'pack lunch': { category: 'cooking', minutes: 10 },
  'wash dishes': { category: 'cleaning', minutes: 15 },
  'load dishwasher': { category: 'cleaning', minutes: 8 },
  'unload dishwasher': { category: 'cleaning', minutes: 8 },

  // Shopping tasks
  'grocery shopping': { category: 'shopping', minutes: 60, tips: 'Make a list organized by store layout' },
  'buy household supplies': { category: 'shopping', minutes: 30 },
  'pharmacy run': { category: 'shopping', minutes: 20 },

  // Maintenance tasks
  'water plants': { category: 'maintenance', minutes: 10 },
  'take out trash': { category: 'maintenance', minutes: 5 },
  'change air filter': { category: 'maintenance', minutes: 5 },
  'check tire pressure': { category: 'maintenance', minutes: 10 },

  // Outdoor tasks
  'mow lawn': { category: 'outdoor', minutes: 45 },
  'weed garden': { category: 'outdoor', minutes: 30 },
  'water garden': { category: 'outdoor', minutes: 15 },
  'rake leaves': { category: 'outdoor', minutes: 40 }
};

export const categoryEstimates: Record<TaskCategory, number> = {
  cleaning: 20,
  cooking: 30,
  shopping: 45,
  laundry: 15,
  maintenance: 15,
  organization: 30,
  outdoor: 35,
  personal: 25,
  other: 20
};

export function getTaskEstimate(title: string, category: TaskCategory): { minutes: number; tips?: string } {
  const lowerTitle = title.toLowerCase();
  
  // Check for exact or partial matches in taskEstimates
  const exactMatch = taskEstimates[lowerTitle];
  if (exactMatch) {
    return { minutes: exactMatch.minutes, tips: exactMatch.tips };
  }

  // Check for partial matches
  for (const [taskName, estimate] of Object.entries(taskEstimates)) {
    if (lowerTitle.includes(taskName) || taskName.includes(lowerTitle)) {
      return { minutes: estimate.minutes, tips: estimate.tips };
    }
  }

  // Fall back to category estimate
  return { minutes: categoryEstimates[category] };
}

export function getTaskSuggestion(category: TaskCategory): string[] {
  const suggestions = Object.entries(taskEstimates)
    .filter(([_, estimate]) => estimate.category === category)
    .map(([taskName]) => taskName);
  
  return suggestions.slice(0, 5); // Return top 5 suggestions
}