
function biodata(nama, umur) {

  var hasil = {}
  hasil.name = nama,
    hasil.age = umur,
    hasil.addres = 'Madiun',
    hasil.hobbies = ['Coding', 'Membaca'],
    hasil.is_married = false,
    hasil.list_school = [
      {
        nama: "SMK Negeri 1 Madiun",
        year_in: 2011,
        year_out: 2014,
        major: "Elektronika"
      },
      {
        nama: "Politeknik Negeri Madiun",
        year_in: 2014,
        year_out: 2017,
        major: "Teknik Komputer Kontrol"
      }
    ],
    hasil.skills = [
      {
        nama: "Frontend Web",
        level: "Advance"
      },
      {
        nama: "Backend Web",
        level: "Beginer"
      }
    ],
    hasil.interest_in_coding = true;

  json = JSON.stringify(hasil, '', '\t');
  console.log(json);
}
biodata("Rahmad", 23);



// Sumber ilmu
// https://jagowebdev.com/json-pada-javascript-panduan-lengkap
