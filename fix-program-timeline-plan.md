# Fix Program Timeline Plan

## Issues to Address:
1. The program timeline is too long (5 days with detailed activities)
2. The user requested that hours and locations should not be shown

## Solution Plan:

### 1. Remove Hours and Locations
- Remove the time and location properties from each activity
- Remove the Clock and MapPin icons and their display
- Simplify the activity display to only show name and description

### 2. Shorten the Program Timeline
- Instead of showing all 5 days with all activities, create a more concise overview
- Option 1: Show only 3 days instead of 5 (Wed, Fri, Sun)
- Option 2: Show all 5 days but with fewer activities per day
- Option 3: Create a summary view with just the main activities per day

### 3. Simplify the Layout
- Remove the vertical timeline layout
- Create a more compact horizontal layout
- Reduce the amount of visual detail per activity
- Make the overall component more concise

## Implementation Steps:
1. Update the programData structure to remove time and location
2. Simplify the activity display component
3. Reduce the number of activities shown
4. Update the layout to be more compact