#include <iostream>
#include <fstream> 
#include <iostream>
/* run this program using the console pauser or add your own getch, system("pause") or input loop */

using namespace std;
int main()
{
	int a[10][10];
	int n;
	//doc file text
	ifstream ifs("matrix.txt", ios::in);
	if (!ifs.is_open())
	{
		cout << "Khong the mo file.\n";
		return 0;
	}
	else {
		ifs >> n;
		for (int i = 0; i < n; i++)
		{
			for (int j = 0; j < n; j++)
			{
				ifs >> a[i][j];
			}
		}
	}
	ifs.close();
	
	// ghi ra file nhi phan
	ofstream ofs("matrix_binary.dat", ios::out| ios::binary );
	if(!ofs) {
      cout << "Khong the mo file.\n" << endl;
      return 1;
   }
  	else{
	for (int i = 0; i < n; i++)
	{
		for (int j = 0; j < n; j++)
		{
			//ofs << a[i][j];
			//ofs << " ";
			ofs.write(reinterpret_cast<const char*> (&a[i][j]), sizeof(a)); 
			//ofs.write((char*) &a[i], sizeof(10)); 
			//ofs.write((char*) &a[j], sizeof(10)); 
		}
		cout << "\n";
	}
	}
	ofs.close();
	// doc vao file nhi phan
	ifstream file;
	file.open("matrix_binary.dat", ios::binary );
	if(!file) {
      cout << "Khong the mo file.\n" << endl;
      return 0;
   }
   else{
   		file >> n;
		for (int i = 0; i < n; i++)
		{
			for (int j = 0; j < n; j++)
			{
				file.read(reinterpret_cast<char*> (&a[i][j]), sizeof(a)); 
				//file.read((char*) &a[i], sizeof(10)); 
				//file.read((char*) &a[j], sizeof(10)); 
			}
		}
	}
	
	// ghi ra man hinh
	for (int i = 0; i < n; i++)
	{
		for (int j = 0; j < n; j++)
		{
			cout << a[i][j];
			cout << " ";
		}
		cout << "\n";
	}
	file.close();*/
	
	system("pause");
	return 0;
}
