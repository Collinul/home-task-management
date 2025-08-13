const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Clean existing data
  await prisma.taskHistory.deleteMany();
  await prisma.recurrenceRule.deleteMany();
  await prisma.task.deleteMany();
  await prisma.category.deleteMany();
  await prisma.householdMember.deleteMany();
  await prisma.household.deleteMany();
  await prisma.user.deleteMany();

  console.log('🧹 Cleaned existing data');

  // Create demo user
  const demoUser = await prisma.user.create({
    data: {
      email: 'demo@example.com',
      password: await bcrypt.hash('demo123', 10),
      name: 'Demo User'
    }
  });

  console.log('👤 Created demo user:', demoUser.email);

  // Create household
  const household = await prisma.household.create({
    data: {
      name: 'Demo Household',
      description: 'A sample household for demonstration'
    }
  });

  // Add user to household
  await prisma.householdMember.create({
    data: {
      userId: demoUser.id,
      householdId: household.id,
      role: 'admin'
    }
  });

  console.log('🏠 Created household:', household.name);

  // Create categories
  const categories = await Promise.all([
    prisma.category.create({
      data: { name: 'Cleaning', emoji: '🧹', color: '#60A5FA', userId: demoUser.id }
    }),
    prisma.category.create({
      data: { name: 'Kitchen', emoji: '🍳', color: '#34D399', userId: demoUser.id }
    }),
    prisma.category.create({
      data: { name: 'Laundry', emoji: '👔', color: '#A78BFA', userId: demoUser.id }
    }),
    prisma.category.create({
      data: { name: 'Maintenance', emoji: '🔧', color: '#FBBF24', userId: demoUser.id }
    }),
    prisma.category.create({
      data: { name: 'Organizing', emoji: '📦', color: '#F87171', userId: demoUser.id }
    }),
    prisma.category.create({
      data: { name: 'Outdoor', emoji: '🌿', color: '#10B981', userId: demoUser.id }
    }),
    prisma.category.create({
      data: { name: 'Shopping', emoji: '🛒', color: '#F59E0B', userId: demoUser.id }
    }),
    prisma.category.create({
      data: { name: 'Other', emoji: '📝', color: '#6B7280', userId: demoUser.id }
    })
  ]);

  console.log('📂 Created', categories.length, 'categories');

  // Helper function to get dates for the current week
  const getWeekDate = (daysFromMonday) => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const monday = new Date(today);
    monday.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));
    
    const targetDate = new Date(monday);
    targetDate.setDate(monday.getDate() + daysFromMonday);
    targetDate.setHours(10, 0, 0, 0);
    
    return targetDate;
  };

  // Create sample tasks for the week
  const tasks = [
    // Monday
    {
      title: 'Vacuum living room',
      description: 'Don\'t forget under the couch',
      categoryId: categories[0].id, // Cleaning
      dueDate: getWeekDate(0),
      estimatedMinutes: 30,
      priority: 'medium',
      userId: demoUser.id,
      householdId: household.id
    },
    {
      title: 'Clean kitchen counters',
      categoryId: categories[1].id, // Kitchen
      dueDate: getWeekDate(0),
      estimatedMinutes: 15,
      priority: 'high',
      userId: demoUser.id,
      householdId: household.id
    },
    
    // Tuesday
    {
      title: 'Do laundry - whites',
      description: 'Use hot water setting',
      categoryId: categories[2].id, // Laundry
      dueDate: getWeekDate(1),
      estimatedMinutes: 90,
      priority: 'medium',
      userId: demoUser.id,
      householdId: household.id
    },
    {
      title: 'Grocery shopping',
      description: 'Check pantry for staples',
      categoryId: categories[6].id, // Shopping
      dueDate: getWeekDate(1),
      estimatedMinutes: 60,
      priority: 'high',
      userId: demoUser.id,
      householdId: household.id
    },
    
    // Wednesday
    {
      title: 'Clean bathroom',
      description: 'Including mirrors and fixtures',
      categoryId: categories[0].id, // Cleaning
      dueDate: getWeekDate(2),
      estimatedMinutes: 45,
      priority: 'medium',
      userId: demoUser.id,
      householdId: household.id
    },
    {
      title: 'Organize garage',
      categoryId: categories[4].id, // Organizing
      dueDate: getWeekDate(2),
      estimatedMinutes: 120,
      priority: 'low',
      userId: demoUser.id,
      householdId: household.id
    },
    
    // Thursday
    {
      title: 'Meal prep for weekend',
      description: 'Prepare ingredients for Saturday dinner',
      categoryId: categories[1].id, // Kitchen
      dueDate: getWeekDate(3),
      estimatedMinutes: 60,
      priority: 'medium',
      userId: demoUser.id,
      householdId: household.id
    },
    {
      title: 'Water indoor plants',
      categoryId: categories[7].id, // Other
      dueDate: getWeekDate(3),
      estimatedMinutes: 15,
      priority: 'low',
      userId: demoUser.id,
      householdId: household.id
    },
    
    // Friday
    {
      title: 'Deep clean refrigerator',
      description: 'Check expiration dates',
      categoryId: categories[1].id, // Kitchen
      dueDate: getWeekDate(4),
      estimatedMinutes: 45,
      priority: 'medium',
      userId: demoUser.id,
      householdId: household.id
    },
    {
      title: 'Take out trash',
      categoryId: categories[0].id, // Cleaning
      dueDate: getWeekDate(4),
      estimatedMinutes: 10,
      priority: 'high',
      userId: demoUser.id,
      householdId: household.id
    },
    
    // Saturday
    {
      title: 'Mow lawn',
      description: 'Front and back yard',
      categoryId: categories[5].id, // Outdoor
      dueDate: getWeekDate(5),
      estimatedMinutes: 60,
      priority: 'medium',
      userId: demoUser.id,
      householdId: household.id
    },
    {
      title: 'Change bed sheets',
      categoryId: categories[2].id, // Laundry
      dueDate: getWeekDate(5),
      estimatedMinutes: 20,
      priority: 'medium',
      userId: demoUser.id,
      householdId: household.id
    },
    
    // Sunday
    {
      title: 'Weekly planning',
      description: 'Review and plan tasks for next week',
      categoryId: categories[7].id, // Other
      dueDate: getWeekDate(6),
      estimatedMinutes: 30,
      priority: 'high',
      userId: demoUser.id,
      householdId: household.id
    },
    {
      title: 'Check smoke detectors',
      categoryId: categories[3].id, // Maintenance
      dueDate: getWeekDate(6),
      estimatedMinutes: 15,
      priority: 'low',
      userId: demoUser.id,
      householdId: household.id
    }
  ];

  // Create tasks
  const createdTasks = await Promise.all(
    tasks.map(task => prisma.task.create({ data: task }))
  );

  console.log('✅ Created', createdTasks.length, 'sample tasks');

  // Mark some tasks as completed (for demo purposes)
  const tasksToComplete = createdTasks.slice(0, 3);
  for (const task of tasksToComplete) {
    await prisma.task.update({
      where: { id: task.id },
      data: {
        isCompleted: true,
        completedAt: new Date(),
        actualMinutes: task.estimatedMinutes
      }
    });

    await prisma.taskHistory.create({
      data: {
        taskId: task.id,
        action: 'completed',
        completedBy: demoUser.id,
        completionTime: new Date()
      }
    });
  }

  console.log('✅ Marked', tasksToComplete.length, 'tasks as completed');

  // Create a recurring task
  const recurringTask = await prisma.task.create({
    data: {
      title: 'Daily kitchen cleanup',
      description: 'Quick clean after dinner',
      categoryId: categories[1].id, // Kitchen
      dueDate: new Date(),
      estimatedMinutes: 20,
      priority: 'high',
      userId: demoUser.id,
      householdId: household.id
    }
  });

  await prisma.recurrenceRule.create({
    data: {
      taskId: recurringTask.id,
      frequency: 'daily',
      interval: 1
    }
  });

  console.log('🔄 Created recurring task');

  console.log('✨ Seed completed successfully!');
  console.log('\n📧 Demo credentials:');
  console.log('   Email: demo@example.com');
  console.log('   Password: demo123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });