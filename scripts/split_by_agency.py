import csv
import sys

def split_csv_by_agency(input_filepath):
    """
    Reads the input CSV and produces one CSV file per unique Agency_Name.
    The file name is derived by replacing spaces and '&' to keep things OS-friendly.
    """
    # Read the entire CSV into memory, grouping rows by Agency_Name
    with open(input_filepath, mode='r', newline='', encoding='utf-8') as infile:
        reader = csv.DictReader(infile)
        
        # Dictionary to hold rows by agency, e.g. { "Water & Sewage": [row1, row2, ...], ... }
        agency_data = {}

        for row in reader:
            agency = row['Agency_Name'].strip()  # Remove any accidental whitespace

            if agency not in agency_data:
                agency_data[agency] = []
            
            agency_data[agency].append(row)
    
    # Write each group to its own CSV file
    for agency, rows in agency_data.items():
        # Create a "safe" filename for each agency
        # e.g., "Water_And_Sewage.csv"
        safe_agency_name = agency.replace('&', 'And').replace(' ', '_')
        output_filename = f"{safe_agency_name}.csv"
        
        # Use the same fieldnames as the original CSV
        fieldnames = rows[0].keys()  # Or store from reader.fieldnames if you prefer

        with open(output_filename, mode='w', newline='', encoding='utf-8') as outfile:
            writer = csv.DictWriter(outfile, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(rows)
        
        print(f"Created: {output_filename} ({len(rows)} rows)")

if __name__ == "__main__":
    # Expect exactly one argument: the path to the master CSV
    if len(sys.argv) < 2:
        print("Usage: python split_by_agency.py <path_to_csv>")
        sys.exit(1)
    
    input_csv = sys.argv[1]
    split_csv_by_agency(input_csv)
