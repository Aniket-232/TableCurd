
function formServices(){
    const location = useLocation();
    const state = location.state || {};
    const navigate = useNavigate();
    const [form] = Form.useForm();
  
    useEffect(() => {
      if (state.update) {
        form.setFieldsValue({
          Code: state.update.code,
          Name: state.update.names,
          Email: state.update.email,
          Activities: state.update.activities,
          remember: state.update.edit
        });
      }
    }, [state.update]);
  
    function handleChange(values) {
      const updatedRecord = {
        id: Date.now(), 
        code: values.Code,
        name: values.Name,
        email: values.Email,
        activities: values.Activities,
        edit: values.remember
      };
  
      let existing = JSON.parse(localStorage.getItem("employees")) || [];
  
      
      if (state.update) {
        existing = existing.map(emp =>
          emp.code === state.update.code ? updatedRecord : emp
        );
      } else {
        existing.push(updatedRecord);
      }
  
      localStorage.setItem("employees", JSON.stringify(existing));
      navigate("/");
    }
    
}