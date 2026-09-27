#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Expense
{
    char date[15];
    char category[20];
    char description[50];
    float amount;
};

/* Add expense using fprintf() */
void addExpense()
{
    struct Expense e;
    FILE *fp;

    fp = fopen("expenses.txt", "a");

    if (fp == NULL)
    {
        printf("Unable to open file!\n");
        return;
    }

    printf("\nEnter date: ");
    scanf("%14s", e.date);

    printf("Enter category: ");
    scanf("%19s", e.category);

    printf("Enter description: ");
    scanf(" %49[^\n]", e.description);

    printf("Enter amount: ");
    scanf("%f", &e.amount);

    fprintf(fp, "%s %s %s %.2f\n",
            e.date, e.category, e.description, e.amount);

    fclose(fp);

    printf("Expense added successfully!\n");
}

/* Display using fscanf() */
void viewExpenses()
{
    struct Expense e;
    FILE *fp;

    fp = fopen("expenses.txt", "r");

    if (fp == NULL)
    {
        printf("No expenses found!\n");
        return;
    }

    printf("\n========== EXPENSES ==========\n");

    while (fscanf(fp, "%14s %19s %49s %f",
                  e.date, e.category,
                  e.description, &e.amount) == 4)
    {
        printf("\nDate        : %s", e.date);
        printf("\nCategory    : %s", e.category);
        printf("\nDescription : %s", e.description);
        printf("\nAmount      : %.2f\n", e.amount);
    }

    fclose(fp);
}

/* fgets() and fputs() */
void showFileUsingFgets()
{
    FILE *fp;
    char line[150];

    fp = fopen("expenses.txt", "r");

    if (fp == NULL)
    {
        printf("File not found!\n");
        return;
    }

    printf("\n========== USING fgets() ==========\n");

    while (fgets(line, sizeof(line), fp) != NULL)
    {
        fputs(line, stdout);
    }

    fclose(fp);
}

/* fgetc() and fputc() */
void copyFileUsingCharacters()
{
    FILE *source;
    FILE *destination;
    int ch;

    source = fopen("expenses.txt", "r");
    destination = fopen("backup.txt", "w");

    if (source == NULL || destination == NULL)
    {
        printf("File error!\n");

        if (source != NULL)
            fclose(source);

        if (destination != NULL)
            fclose(destination);

        return;
    }

    while ((ch = fgetc(source)) != EOF)
    {
        fputc(ch, destination);
    }

    fclose(source);
    fclose(destination);

    printf("File copied to backup.txt\n");
}

/* ftell(), fseek() and rewind() */
void filePosition()
{
    FILE *fp;
    long position;
    char line[150];

    fp = fopen("expenses.txt", "r");

    if (fp == NULL)
    {
        printf("File not found!\n");
        return;
    }

    printf("\n========== FILE POSITION ==========\n");

    position = ftell(fp);
    printf("Initial position: %ld\n", position);

    fgets(line, sizeof(line), fp);

    position = ftell(fp);
    printf("Position after reading: %ld\n", position);

    fseek(fp, 0, SEEK_SET);

    printf("After fseek(): position = %ld\n", ftell(fp));

    fgets(line, sizeof(line), fp);
    printf("First line: %s", line);

    rewind(fp);

    printf("After rewind(): position = %ld\n", ftell(fp));

    fclose(fp);
}

/* Rename a file */
void renameFile()
{
    if (rename("backup.txt", "expense_backup.txt") == 0)
        printf("backup.txt renamed to expense_backup.txt\n");
    else
        printf("Unable to rename file.\n");
}

/* Delete a file */
void deleteBackup()
{
    if (remove("expense_backup.txt") == 0)
        printf("Backup file deleted.\n");
    else
        printf("Backup file not found.\n");
}

/* Binary file: wb and rb */
void binaryFile()
{
    struct Expense e;
    FILE *fp;

    strcpy(e.date, "2026-09-24");
    strcpy(e.category, "Demo");
    strcpy(e.description, "BinaryTest");
    e.amount = 100;

    fp = fopen("expense.dat", "wb");

    if (fp == NULL)
    {
        printf("Unable to create binary file.\n");
        return;
    }

    fwrite(&e, sizeof(e), 1, fp);
    fclose(fp);

    printf("\nBinary file created using wb and fwrite().\n");

    fp = fopen("expense.dat", "rb");

    if (fp == NULL)
    {
        printf("Unable to open binary file.\n");
        return;
    }

    fread(&e, sizeof(e), 1, fp);

    printf("\n========== BINARY FILE ==========\n");
    printf("Date        : %s\n", e.date);
    printf("Category    : %s\n", e.category);
    printf("Description : %s\n", e.description);
    printf("Amount      : %.2f\n", e.amount);

    fclose(fp);
}

int main()
{
    int choice;

    while (1)
    {
        printf("\n\n===== EXPENSE TRACKER =====\n");
        printf("1. Add Expense\n");
        printf("2. View Expenses\n");
        printf("3. Read using fgets()\n");
        printf("4. Copy using fgetc()/fputc()\n");
        printf("5. File position (ftell/fseek/rewind)\n");
        printf("6. Rename backup file\n");
        printf("7. Delete backup file\n");
        printf("8. Binary file demo\n");
        printf("9. Exit\n");

        printf("\nEnter choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
            case 1:
                addExpense();
                break;

            case 2:
                viewExpenses();
                break;

            case 3:
                showFileUsingFgets();
                break;

            case 4:
                copyFileUsingCharacters();
                break;

            case 5:
                filePosition();
                break;

            case 6:
                renameFile();
                break;

            case 7:
                deleteBackup();
                break;

            case 8:
                binaryFile();
                break;

            case 9:
                printf("Goodbye!\n");
                return 0;

            default:
                printf("Invalid choice!\n");
        }
    }

    return 0;
}