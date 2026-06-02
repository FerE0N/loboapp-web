const a = (sample: any) => fetch("https://example.org").then(e=>e.text()).catch(e=>"snafu");
